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
