# Qualifin E-Course — WMI Certification

Static website for the WMI (Wakil Manajer Investasi) certification e-course. No installation or server needed — just open `index.html` in a browser, or host the folder on any static hosting (Netlify, Vercel, GitHub Pages).

## How to add content

Everything you edit lives in **`js/data.js`**. Open it in any text editor.

### 1. Add a video lesson
1. Upload the video to Google Drive.
2. Right-click the file → Share → set to "Anyone with the link" (Viewer).
3. Copy the link. It looks like:
   `https://drive.google.com/file/d/1AbCDEfGhIjK/view?usp=sharing`
4. Copy just the ID part (`1AbCDEfGhIjK`) into a new lesson block in `js/data.js`:
   ```js
   {
     id: "lesson-3",
     title: "Modul 3: ...",
     description: "...",
     driveFileId: "1AbCDEfGhIjK",
   }
   ```

### 2. Add a study material (PDF)
1. Export your PPT as PDF (PowerPoint → File → Export → Create PDF).
2. Drop the PDF file into the `materials/` folder.
3. Add an entry in `js/data.js`:
   ```js
   {
     id: "material-3",
     title: "Slide Modul 3",
     file: "materials/modul-3.pdf",
   }
   ```

### 3. Add try-out questions
Add a block to the `quizQuestions` array in `js/data.js`:
```js
{
  question: "Pertanyaan...?",
  options: ["A", "B", "C", "D"],
  correctIndex: 1, // 0 = A, 1 = B, 2 = C, 3 = D
}
```

## Replacing the logo
`assets/logo.svg` is a placeholder recreation of the Qualifin wordmark. Replace it with your real logo file (keep the filename `logo.svg`, or update the `<img src>` paths in `index.html` if you use a different file name/format).

## Hosting for free
Once ready, you can drag-and-drop this whole folder onto [Netlify Drop](https://app.netlify.com/drop) or push it to a GitHub repo and enable GitHub Pages — no backend required since everything runs in the browser.

## Restricting access, the admin panel, and saving try-out scores

The site is gated behind a password. Passwords are **not** hardcoded anymore — you generate and revoke them yourself from an admin panel at `admin.html`, and they're stored (as one-way hashes, never plain text) in Firebase Firestore. Try-out submissions (name + score) are saved to Firestore too.

### 1. Create a Firebase project
1. Go to [console.firebase.google.com](https://console.firebase.google.com) and sign in with your Google account.
2. Click **Add project**, name it (e.g. `qualifin-ecourse`), and finish the setup wizard (you can disable Google Analytics — not needed).
3. In the left sidebar, click **Build → Firestore Database → Create database**. Choose a region close to Indonesia (e.g. `asia-southeast2`), and start in **production mode**.

### 2. Set the Firestore security rules
Go to the **Rules** tab of Firestore and replace the default rules with:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /client_passwords/{hashId} {
      allow get: if true;
      allow list: if request.auth != null;
      allow create, delete: if request.auth != null;
      allow update: if false;
    }
    match /tryout_submissions/{docId} {
      allow create: if request.resource.data.name is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.name.size() < 200
                    && request.resource.data.score is int
                    && request.resource.data.total is int;
      allow read: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
```
Click **Publish**. What this does:
- `client_passwords`: anyone can check whether a *specific* password hash exists (needed for the login gate), but nobody can list all passwords or create/delete them unless logged in as admin.
- `tryout_submissions`: anyone can submit a new score, but only the logged-in admin can read the list back; nobody can edit or delete a submission.

### 3. Create your admin login
1. In the left sidebar, click **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable **Email/Password**.
3. Go to the **Users** tab → **Add user**. Enter the email and password you'll use to log into `admin.html`. (This is separate from the client passwords you'll generate for students.)

### 4. Register a web app and get your config
1. Click the gear icon → **Project settings → General**, scroll to **Your apps**, click the **`</>`** (web) icon to register a new web app (any nickname is fine, no need for Firebase Hosting).
2. Firebase will show you a `firebaseConfig` object like:
   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "qualifin-ecourse.firebaseapp.com",
     projectId: "qualifin-ecourse",
     storageBucket: "qualifin-ecourse.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef123456",
   };
   ```
   Copy these values into `js/site-config.js`, replacing the `PASTE_...` placeholders.

### 5. Deploy, then generate client passwords
1. Commit and push the filled-in `js/site-config.js` — GitHub Pages redeploys within a minute or two.
2. Open `https://<your-site>/admin.html`, log in with the admin email/password from step 3.
3. Optionally type a label (e.g. "Batch Januari 2026") and click **Generate Password**. A random password appears once — copy and share it with your students immediately, since it won't be shown again.
4. To revoke access, find the entry in the list and click **Hapus** (Delete) — anyone using that password is locked out immediately.

### 6. View submitted try-out scores
In the Firebase Console, go to **Firestore Database → Data → `tryout_submissions`**. Each entry has `name`, `score`, `total`, `percentage`, and `timestamp`. Export via the ⋮ menu if you want it in a spreadsheet.
