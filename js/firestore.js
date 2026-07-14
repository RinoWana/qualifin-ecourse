import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const isConfigured = Object.values(firebaseConfig).every(
  (value) => typeof value === "string" && !value.startsWith("PASTE_")
);

let db = null;
if (isConfigured) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

async function sha256Hex(text) {
  const encoded = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

window.checkClientPassword = async function (password) {
  if (!db) {
    return { ok: false, reason: "not_configured" };
  }
  try {
    const hash = await sha256Hex(password);
    const snap = await getDoc(doc(db, "client_passwords", hash));
    return { ok: snap.exists() };
  } catch (err) {
    console.error("Gagal memeriksa password:", err);
    return { ok: false, reason: "error", error: err };
  }
};

window.saveQuizResult = async function ({ name, score, total, percentage }) {
  if (!db) {
    console.warn("Firebase belum dikonfigurasi — skor hanya tersimpan di layar, tidak dikirim ke server.");
    return { saved: false, reason: "not_configured" };
  }
  try {
    await addDoc(collection(db, "tryout_submissions"), {
      name,
      score,
      total,
      percentage,
      timestamp: serverTimestamp(),
    });
    return { saved: true };
  } catch (err) {
    console.error("Gagal menyimpan skor ke server:", err);
    return { saved: false, reason: "error", error: err };
  }
};
