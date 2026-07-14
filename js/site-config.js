/*
  ============================================================
  SITE ACCESS & SCORE STORAGE SETTINGS — edit this file only.
  ============================================================
*/

// Password required to open the site.
// NOTE: this is a simple front-door check, not real security — anyone who
// views the page source can find it. It keeps casual visitors out; it does
// not protect sensitive data. Change it any time by editing the line below.
const SITE_PASSWORD = "PASTE_YOUR_PASSWORD_HERE";

// Firebase project settings — used to save try-out scores to the cloud.
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
