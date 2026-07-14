/*
  ============================================================
  SITE ACCESS & SCORE STORAGE SETTINGS — edit this file only.
  ============================================================
*/

// Client (student) passwords are no longer set here — they are generated
// and revoked from the admin panel at admin.html, and stored (as hashes,
// never plain text) in Firestore. See README.md for setup steps.

// Firebase project settings — used for admin login, client password
// checks, and saving try-out scores to the cloud.
// Get these values from: Firebase Console > Project settings > General >
// "Your apps" > SDK setup and configuration > Config.
// See README.md for the full step-by-step tutorial.
const firebaseConfig = {
  apiKey: "AIzaSyCqFjBA7-0_CHw7za-FDR1XvFGgBsmeslw",
  authDomain: "qualifin-ecourse.firebaseapp.com",
  projectId: "qualifin-ecourse",
  storageBucket: "qualifin-ecourse.firebasestorage.app",
  messagingSenderId: "243081173898",
  appId: "1:243081173898:web:cecd665a4bceff72280673",
};
