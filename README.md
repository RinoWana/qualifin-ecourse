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

## Restricting access (password) and saving try-out scores

The site is gated behind a shared password, and try-out submissions (name + score) are saved to a Firebase Firestore database. Both are configured in **`js/site-config.js`**.

### 1. Set the site password
Open `js/site-config.js` and change:
```js
const SITE_PASSWORD = "PASTE_YOUR_PASSWORD_HERE";
```
to whatever password you want to share with your students. This is a simple front-door check (not encryption) — good enough to keep casual visitors out, not for protecting sensitive data.

### 2. Create a Firebase project (for score storage)
1. Go to [console.firebase.google.com](https://console.firebase.google.com) and sign in with your Google account.
2. Click **Add project**, name it (e.g. `qualifin-ecourse`), and finish the setup wizard (you can disable Google Analytics for this project — not needed).
3. In the left sidebar, click **Build → Firestore Database → Create database**. Choose a region close to Indonesia (e.g. `asia-southeast2`), and start in **production mode**.
4. Once created, go to the **Rules** tab and replace the default rules with:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /tryout_submissions/{docId} {
         allow create: if request.resource.data.name is string
                       && request.resource.data.name.size() > 0
                       && request.resource.data.name.size() < 200
                       && request.resource.data.score is int
                       && request.resource.data.total is int;
         allow read, update, delete: if false;
       }
     }
   }
   ```
   This lets the website submit new scores, but nobody (including other students) can read, edit, or delete submissions from the browser — only you, via the Firebase Console.
5. Click **Publish**.
6. In the left sidebar, click the gear icon → **Project settings → General**, scroll to **Your apps**, click the **`</>`** (web) icon to register a new web app (any nickname is fine, no need for Firebase Hosting).
7. Firebase will show you a `firebaseConfig` object like:
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
   Copy these values into the matching fields in `js/site-config.js`, replacing the `PASTE_...` placeholders.

### 3. View submitted scores
In the Firebase Console, go to **Firestore Database → Data**. Each try-out submission appears as a document in the `tryout_submissions` collection, with `name`, `score`, `total`, `percentage`, and `timestamp`. You can export this data (⋮ menu → Export collection) if you want it in a spreadsheet.

### 4. Deploy the change
Once `js/site-config.js` is filled in, commit and push — GitHub Pages redeploys automatically within a minute or two.
