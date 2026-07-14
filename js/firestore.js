import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
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
