import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const isConfigured = Object.values(firebaseConfig).every(
  (value) => typeof value === "string" && !value.startsWith("PASTE_")
);

const loginBox = document.getElementById("admin-login");
const panel = document.getElementById("admin-panel");
const loginError = document.getElementById("admin-login-error");

if (!isConfigured) {
  loginError.textContent = "Firebase belum dikonfigurasi. Lengkapi js/site-config.js terlebih dahulu.";
} else {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  document.getElementById("admin-login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("admin-email").value.trim();
    const password = document.getElementById("admin-password-input").value;
    loginError.textContent = "";
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      loginError.textContent = "Login gagal: email atau password salah.";
    }
  });

  document.getElementById("admin-logout").addEventListener("click", () => signOut(auth));

  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginBox.style.display = "none";
      panel.style.display = "block";
      loadPasswordList();
    } else {
      loginBox.style.display = "flex";
      panel.style.display = "none";
    }
  });

  async function sha256Hex(text) {
    const encoded = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function generateReadablePassword(length = 10) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => chars[b % chars.length]).join("");
  }

  document.getElementById("generate-password-btn").addEventListener("click", async () => {
    const label = document.getElementById("new-password-label").value.trim() || "(tanpa label)";
    const plainPassword = generateReadablePassword(10);
    const hash = await sha256Hex(plainPassword);

    await setDoc(doc(db, "client_passwords", hash), {
      label,
      createdAt: serverTimestamp(),
    });

    const box = document.getElementById("generated-password-box");
    box.style.display = "block";
    box.innerHTML = `
      <p><strong>Password baru:</strong> <code>${plainPassword}</code></p>
      <p class="warning-text">Simpan/salin sekarang — password ini tidak akan ditampilkan lagi.</p>
    `;
    document.getElementById("new-password-label").value = "";
    loadPasswordList();
  });

  async function loadPasswordList() {
    const listEl = document.getElementById("password-list");
    listEl.innerHTML = "<p class='muted-text'>Memuat...</p>";
    const snapshot = await getDocs(collection(db, "client_passwords"));
    if (snapshot.empty) {
      listEl.innerHTML = "<p class='muted-text'>Belum ada password client.</p>";
      return;
    }
    listEl.innerHTML = "";
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const row = document.createElement("div");
      row.className = "password-row";
      const created = data.createdAt?.toDate ? data.createdAt.toDate().toLocaleString("id-ID") : "-";
      row.innerHTML = `
        <div>
          <div class="password-label">${data.label || "(tanpa label)"}</div>
          <div class="password-meta">Dibuat: ${created}</div>
        </div>
        <button class="delete-password-btn" data-id="${docSnap.id}">Hapus</button>
      `;
      row.querySelector(".delete-password-btn").addEventListener("click", async () => {
        if (!confirm("Hapus password ini? Client yang memakainya tidak akan bisa masuk lagi.")) return;
        await deleteDoc(doc(db, "client_passwords", docSnap.id));
        loadPasswordList();
      });
      listEl.appendChild(row);
    });
  }
}
