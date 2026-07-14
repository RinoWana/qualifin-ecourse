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
    file: "https://drive.google.com/file/d/1VkqH3mVjjVbkziO87iLb7bciSxw86GDh/view?usp=sharing",
  },
  {
    id: "material-2",
    title: "Slide Modul 2 - Instrumen Keuangan (Reksadana)",
    file: "https://drive.google.com/file/d/1uSji62H5nLxGJupyrlHghS5Ve6tCoQDz/view?usp=sharing",
  },
  {
    id: "material-3",
    title: "Slide Modul 3 - Instrumen Keuangan (Obligasi)",
    file: "https://drive.google.com/file/d/1CPVPETq5j5FQOXrQpYOsZS-pLch-VdN6/view?usp=sharing",
  },
  {
    id: "material-4",
    title: "Slide Modul 4 - Instrumen Keuangan (Saham dan Analisa Fundamental)",
    file: "https://drive.google.com/file/d/1ItFLMxyRT2FAnkWVVvE4f_sj0XkVQ2F0/view?usp=sharing",
  },
  {
    id: "material-5",
    title: "Slide Modul 5 - Makroekonomi",
    file: "https://drive.google.com/file/d/1iGxsV7Je-fj-7FyhH-dKL6I364_FFbOR/view?usp=sharing",
  },
  {
    id: "material-6",
    title: "Slide Modul 6 - Manajemen Risiko",
    file: "https://drive.google.com/file/d/1X5zFsapyb0Mg5qb2y-xZerq7hov6qyUs/view?usp=sharing",
  },
  {
    id: "material-kk1",
    title: "Slide KK1 - Menyusun Strategi Investasi",
    file: "https://drive.google.com/file/d/1oDpIKCeg0e0rfWR90y-4snIP4aedfLlc/view?usp=sharing",
  },
  {
    id: "material-kk2",
    title: "Slide KK2 - Melakukan Transaksi Portofolio",
    file: "https://drive.google.com/file/d/1zFWP2gt7KxcUBz0NSP8E5gXbCn4TpkEz/view?usp=sharing",
  },
  {
    id: "material-kk3",
    title: "Slide KK3 - Melakukan Monitoring Portofolio",
    file: "https://drive.google.com/file/d/1mgvSBiD3TOS5f0KD6I-IDvWIp7u9afWn/view?usp=sharing",
  },
  {
    id: "material-kk4",
    title: "Slide KK4 - Penasihat Investasi",
    file: "https://drive.google.com/file/d/1-oihWMLoj9g_40KXK38BSDHN9nDBLhYM/view?usp=sharing",
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
