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
  query,
  orderBy,
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
      loadAnalytics();
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
        await signOut(auth);
      });
      listEl.appendChild(row);
    });
  }

  function formatStatValue(value) {
    if (value >= 1000) return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return String(value);
  }

  function renderStatGrid(stats) {
    const grid = document.getElementById("stat-grid");
    grid.innerHTML = stats
      .map(
        (s) => `
        <div class="stat-tile">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>`
      )
      .join("");
  }

  function renderScoreDistribution(submissions) {
    const chart = document.getElementById("score-distribution-chart");
    const buckets = [
      { label: "0-20%", min: 0, max: 20, count: 0 },
      { label: "21-40%", min: 21, max: 40, count: 0 },
      { label: "41-60%", min: 41, max: 60, count: 0 },
      { label: "61-80%", min: 61, max: 80, count: 0 },
      { label: "81-100%", min: 81, max: 100, count: 0 },
    ];

    submissions.forEach((s) => {
      const bucket = buckets.find((b) => s.percentage >= b.min && s.percentage <= b.max);
      if (bucket) bucket.count++;
    });

    const maxCount = Math.max(1, ...buckets.map((b) => b.count));

    chart.innerHTML = buckets
      .map((b) => {
        const heightPct = Math.max(2, Math.round((b.count / maxCount) * 100));
        return `
          <div class="bar-col">
            <div class="bar-track">
              <div class="bar-fill" style="height:${heightPct}%">
                <span class="bar-value">${b.count}</span>
              </div>
            </div>
            <div class="bar-label">${b.label}</div>
          </div>`;
      })
      .join("");
  }

  function renderSubmissionsTable(submissions) {
    const tbody = document.getElementById("submissions-tbody");
    if (!submissions.length) {
      tbody.innerHTML = `<tr><td colspan="4" class="muted-text">Belum ada try out yang diselesaikan.</td></tr>`;
      return;
    }
    tbody.innerHTML = submissions
      .map((s) => {
        const dateStr = s.timestamp?.toDate ? s.timestamp.toDate().toLocaleString("id-ID") : "-";
        return `
          <tr>
            <td>${s.name}</td>
            <td class="num-cell">${s.score}/${s.total}</td>
            <td class="num-cell">${s.percentage}%</td>
            <td>${dateStr}</td>
          </tr>`;
      })
      .join("");
  }

  async function loadAnalytics() {
    const [submissionsSnap, passwordsSnap] = await Promise.all([
      getDocs(query(collection(db, "tryout_submissions"), orderBy("timestamp", "desc"))),
      getDocs(collection(db, "client_passwords")),
    ]);

    const submissions = submissionsSnap.docs.map((d) => d.data());
    const total = submissions.length;
    const avgPercentage = total
      ? Math.round(submissions.reduce((sum, s) => sum + s.percentage, 0) / total)
      : 0;
    const highest = total ? Math.max(...submissions.map((s) => s.percentage)) : 0;

    renderStatGrid([
      { label: "Total Peserta", value: formatStatValue(total) },
      { label: "Rata-rata Skor", value: `${avgPercentage}%` },
      { label: "Skor Tertinggi", value: `${highest}%` },
      { label: "Password Aktif", value: formatStatValue(passwordsSnap.size) },
    ]);
    renderScoreDistribution(submissions);
    renderSubmissionsTable(submissions);
  }
}
