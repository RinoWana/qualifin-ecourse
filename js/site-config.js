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
  apiKey: "PASTE_FIREBASE_API_KEY_HERE",
  authDomain: "PASTE_FIREBASE_AUTH_DOMAIN_HERE",
  projectId: "PASTE_FIREBASE_PROJECT_ID_HERE",
  storageBucket: "PASTE_FIREBASE_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_FIREBASE_SENDER_ID_HERE",
  appId: "PASTE_FIREBASE_APP_ID_HERE",
};
