/*
  ============================================================
  EDIT THIS FILE ONLY — this is where you add your content.
  You do not need to touch any other file to update the course.
  ============================================================
*/

const courseInfo = {
  title: "Wakil Manajer Investasi (WMI)",
  subtitle: "Persiapan Sertifikasi WMI — Qualifin E-Course",
  description:
    "Kumpulan video pembelajaran, materi studi, dan try out untuk persiapan ujian sertifikasi Wakil Manajer Investasi (WMI).",
};

/*
  VIDEO LESSONS
  -------------
  How to get the embed link from Google Drive:
  1. Open the video file in Google Drive.
  2. Click "Share" and set access to "Anyone with the link" (Viewer).
  3. Copy the link, it looks like:
     https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
  4. Take the FILE_ID_HERE part and paste it into `driveFileId` below.

  Add as many lessons as you want by copying a block below.
*/
const lessons = [
  {
    id: "lesson-kk1",
    title: "KK1: Menyusun Strategi Investasi",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "PASTE_GOOGLE_DRIVE_FILE_ID_HERE",
  },
  {
    id: "lesson-kk2",
    title: "KK2: Melakukan Transaksi Portofolio",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "PASTE_GOOGLE_DRIVE_FILE_ID_HERE",
  },
  {
    id: "lesson-kk3",
    title: "KK3: Melakukan Monitoring Portofolio",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "PASTE_GOOGLE_DRIVE_FILE_ID_HERE",
  },
  {
    id: "lesson-kk4",
    title: "KK4: Penasihat Investasi",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "PASTE_GOOGLE_DRIVE_FILE_ID_HERE",
  },
];

/*
  STUDY MATERIALS (PDF)
  ----------------------
  1. Export your PPT as PDF.
  2. Put the PDF file inside the "materials" folder next to this file.
  3. Set `file` below to the exact file name (e.g. "materials/modul-1.pdf").
*/
const materials = [
  {
    id: "material-1",
    title: "Slide Modul 1 - Pengantar Pasar Modal",
    file: "materials/modul-1.pdf",
  },
  {
    id: "material-2",
    title: "Slide Modul 2 - Instrumen Keuangan (Reksadana)",
    file: "materials/modul-2.pdf",
  },
  {
    id: "material-3",
    title: "Slide Modul 3 - Instrumen Keuangan (Obligasi)",
    file: "materials/modul-3.pdf",
  },
  {
    id: "material-4",
    title: "Slide Modul 4 - Instrumen Keuangan (Saham dan Analisa Fundamental)",
    file: "materials/modul-4.pdf",
  },
  {
    id: "material-5",
    title: "Slide Modul 5 - Makroekonomi",
    file: "materials/modul-5.pdf",
  },
  {
    id: "material-6",
    title: "Slide Modul 6 - Manajemen Risiko",
    file: "materials/modul-6.pdf",
  },
  {
    id: "material-kk1",
    title: "Slide KK1 - Menyusun Strategi Investasi",
    file: "materials/kk1.pdf",
  },
  {
    id: "material-kk2",
    title: "Slide KK2 - Melakukan Transaksi Portofolio",
    file: "materials/kk2.pdf",
  },
  {
    id: "material-kk3",
    title: "Slide KK3 - Melakukan Monitoring Portofolio",
    file: "materials/kk3.pdf",
  },
  {
    id: "material-kk4",
    title: "Slide KK4 - Penasihat Investasi",
    file: "materials/kk4.pdf",
  },
];

/*
  TRY OUT (QUIZ)
  --------------
  `correctIndex` is the position (starting at 0) of the correct option.
  Add as many questions as you want by copying a block below.
*/
const quizQuestions = [
  {
    question: "Contoh pertanyaan try out nomor 1?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctIndex: 0,
  },
  {
    question: "Contoh pertanyaan try out nomor 2?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctIndex: 2,
  },
];
