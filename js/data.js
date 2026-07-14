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
    driveFileId: "1XZ3WAtDQHwHsU9eL_q_pz286EsUX-Uiq",
    provider: "youtube",
    youtubeId: "Am2oSM1rY_M",
  },
  {
    id: "lesson-kk2",
    title: "KK2: Melakukan Transaksi Portofolio",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "1XVrZ0EsvppFMbiH7KBIlhiHIIGXFWBFg",
    provider: "youtube",
    youtubeId: "Am2oSM1rY_M",
  },
  {
    id: "lesson-kk3",
    title: "KK3: Melakukan Monitoring Portofolio",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "1bj0cJo8gQ4S6XxVU-s4FtH9C1Aw9ZEAa",
    provider: "youtube",
    youtubeId: "Am2oSM1rY_M",
  },
  {
    id: "lesson-kk4",
    title: "KK4: Penasihat Investasi",
    description: "Deskripsi singkat materi video ini.",
    driveFileId: "1ADWl7OXvZAgkm05-CElbojPimLn3deKF",
    provider: "youtube",
    youtubeId: "Am2oSM1rY_M",
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
    question: "Reksa Dana yang memiliki kebijakan investasi maksimal 79% berinvestasi pada efek bersifat ekuitas, merupakan Reksa Dana ...",
    options: ["Campuran", "Saham", "Pasar Uang", "Pendapatan Tetap"],
    correctIndex: 0,
  },
  {
    question: "Berikut ini yang bukan merupakan biaya levy transaksi adalah?",
    options: ["Biaya KSEI", "Biaya KPEI", "Biaya Kustodian", "Biaya Bursa Efek Indonesia"],
    correctIndex: 2,
  },
  {
    question: "Obligasi Negara Indonesia diperdagangkan dengan yield 6.597% dan US Treasury Yield dicatatkan sebesar 4.293%. Inflasi Indonesia tercatat sebesar 2.57% dan Inflasi AS tercatat sebesar 3.1%, berapakah spread yield antara Obligasi Negara Indonesia dan US Trasury?",
    options: ["3.926%", "2.504%", "2.304%", "2.769%"],
    correctIndex: 2,
  },
  {
    question: "Berikut ini yang dapat dijadikan tolok ukur Reksa Dana Pasar Uang adalah",
    options: ["Indeks Medium Term Notes", "Indeks Harga Saham Gabungan", "Rata-Rata Suku Bunga Deposito", "Indeks Harga Saham Gabungan"],
    correctIndex: 2,
  },
  {
    question: "Apabila sebuah obligasi memiliki durasi sebesar 2.82, maka berapakah harga obligasi tersebut jika terjadi kenaikan suku bunga sebesar 2%, dan saat ini obligasi tersebut berada pada level 101.2",
    options: ["109.6", "98.49", "95.49", "106.9"],
    correctIndex: 2,
  },
  {
    question: "Penasihat Investasi dalam bentuk perusahaan wajib melakukan hal berikut ini...",
    options: ["Memiliki seorang tenaga ahli yang memiliki izin sebagai WAKIL PERANTARA PEDAGANG EFEK", "Memiliki seorang tenaga ahli yang memiliki izin sebagai wakil Manajer Investasi", "Memiliki dua orang tenaga ahli yang memiliki izin sebagai wakil Manajer Investasi yang bertindak sebagai koordinator dan anggota.", "Memiliki seorang tenaga ahli yang memiliki izin sebagai WAKIL Agen Penjual Efek Reksa Dana"],
    correctIndex: 2,
  },
  {
    question: "Manajer Investasi dapat menyampaikan Nilai Pasar Wajar dari Efek luar negeri kepada Bank Kustodian paling lambat?",
    options: ["Pukul 13.00 WIB setiap hari bursa berikutnya", "Pukul 10.00 WIB setiap hari bursa berikutnya", "Pukul 10.00 WIB setiap hari bursa", "Pukul 17.00 WIB setiap hari bursa"],
    correctIndex: 1,
  },
  {
    question: "Berikut Reksa Dana yang akan menjadi pilihan investor yang menganut teori efficiency portfolio adalah? - Reksa Dana A, Return 1 Tahun 5%, Return 3 Tahun 15%, Return 5 Tahun 12%, Return 10 Tahun 20% - Reksa Dana B, Return 1 Tahun 10%, Return 3 Tahun 7%, Return 5 Tahun 5%, Return 10 Tahun 17% - Reksa Dana C, Return 1 Tahun 50%, Return 3 Tahun 5%, Return 5 Tahun 2%, Return 10 Tahun 18% - Reksa Dana D, Return 1 Tahun 25%, Return 3 Tahun 5%, Return 5 Tahun 10%, Return 10 Tahun 12%",
    options: ["Reksa Dana D", "Reksa Dana C", "Reksa Dana B", "Reksa Dana A"],
    correctIndex: 3,
  },
  {
    question: "PT LSPPM memiliki P/E 12x dan membagikan dividen tunai kepada investor sebesar 70% dari laba bersih per saham. Dividend yield PT LSPPM adalah........",
    options: ["8.33%", "3.58%", "8.53%", "5.83%"],
    correctIndex: 3,
  },
  {
    question: "Sebuah obligasi diperdagangkan pada harga 900, dengan tenor 3 tahun dan kupon 8%, hitunglah YTM obligasi tersebut...",
    options: ["7.89%", "11.93%", "8.89%", "6.98%"],
    correctIndex: 1,
  },
  {
    question: "Manakah pertanyaan yang benar mengenai larangan Reksa Dana berbentuk KIK dibawah ini, kecuali...",
    options: ["Larangan mengenai kepemilikan efek yang diterbitkan oleh pihak afiliasi manajer lebih dari 20%", "Larangan mengenai terlibat Dalam transaksi marjin", "Larangan mengenai membeli efek dari calon Pemegang Unit Penyertaan atau pihak afiliasinya kecuali dilakukan dengan harga yang wajar", "Larangan mengenai pemberian utang secara langsung kecuali pembelian obligasi, efek utang lainnya dan penyimpanan dana di bank"],
    correctIndex: 2,
  },
  {
    question: "Transaksi yang dilarang dalam pengelolaan Reksa Dana, kecuali?",
    options: ["Margin", "REPO", "Transaksi silang", "Short Selling"],
    correctIndex: 2,
  },
  {
    question: "Berikut yang tidak benar terkait Formulir Profil pemodal Reksa Dana adalah:",
    options: ["Wajib memuat Jangka waktu investasi", "Pemodal telah mengikuti pelatihan Industri Reksa Dana secara umum", "Wajib ditandatangani oleh pemodal Reksa Dana", "Wajib memuat Tingkat risiko yang sanggup ditanggung nasabah"],
    correctIndex: 1,
  },
  {
    question: "Berikut ini yang termasuk perusahaan dengan prinsip usaha syariah adalah, kecuali",
    options: ["Perusahaan Consumer", "Perusahaan Perkebunan sawit", "Perusahaan Pertambangan", "Perbankan"],
    correctIndex: 3,
  },
  {
    question: "Manakah kondisi dibawah ini hal yang dilarang dalam perubahan kontrak investasi kolektif...",
    options: ["Penambahan unit penyertaan, dikarenakan penerbitan yang ada saat ini sudah memenuhi Batasan unit penyertaan pada kontrak", "Perubahan dalam rangka menyesuaikan dengan peraturan OJK", "Perubahan kebijakan investasi dalam rangka penyesuaian dengan kondisi market yang ada saat ini", "Perubahan minimum pembelian, penjualan dan pengalihan Reksa Dana dalam Upaya menjangkau investor retail"],
    correctIndex: 0,
  },
  {
    question: "Dibawah ini yang bertugas memberikan arahan kepada tim pengelola investasi dalam pengelolaan Reksa Dana",
    options: ["Dewan Direksi", "Komite Investasi", "Dewan Komisaris", "Nasabah"],
    correctIndex: 1,
  },
  {
    question: "Berikut yang merupakan efek syariah, kecuali?",
    options: ["Rasio total hutang berbasis bunga dibandingkan total aset lebih dari 45%", "Emiten yang tidak melakukan kegiatan bisnis pembiayaan berbasis bunga", "Total hutang yang berbasis bunga dibandingkan dengan total aset lebih dari 45%", "Rasio total pendapatan bunga dan total pendapatan tidak halal lainnya dibandingkan total pendapatan usaha dan total pendapatan lainnya tidak lebih dari 10%"],
    correctIndex: 0,
  },
  {
    question: "Sebuah reksa dana unit penyertaan sebanyak 1 juta lembar dengan nilai aktiva bersih per unit awal Rp. 1.000,- per saham. Saat ini, reksa dana tersebut memiliki tiga jenis saham dengan jumlah masing-masing: 300.000 saham A dengan harga penutupan Rp. 1.100,- per saham, 150.000 saham B dengan harga Rp. 2.500,- per saham, dan 400.000 saham C dengan harga Rp. 1.000,- per saham. Selain itu, posisi kas Reksa Dana sebesar Rp 100 juta. 1 bulan mendatang saham A naik 15%, saham B turun 5% dan saham C naik 10%. Reksa Dana tersebut mengenakan biaya manajer investasi sebesar 3% per tahun dan custody fee sebesar 0.25% per tahun. Berapakah nilai total aktiva bersih/unit reksa dana tersebut bulan depan?",
    options: ["Rp 1,276", "Rp 1,273", "Rp 1,271", "Rp 1,270"],
    correctIndex: 1,
  },
  {
    question: "Nilai Aktiva Bersih Reksa Dana berbasis Efek dalam negeri wajib dilaporkan kepada OJK paling lambat?",
    options: ["Pukul 10.00 WIB setiap hari bursa", "Pukul 17.00 WIB setiap hari bursa", "Pukul 17.00 WIB setiap hari bursa berikutnya", "Pukul 10.00 WIB setiap hari bursa berikutnya => jika efek luar negeri"],
    correctIndex: 1,
  },
  {
    question: "Nilai Aktiva Bersih Reksa Dana berbasis Efek luar negeri wajib dilaporkan kepada OJK paling lambat?",
    options: ["Pukul 17.00 WIB setiap hari bursa berikutnya", "Pukul 10.00 WIB setiap hari bursa berikutnya", "Pukul 10.00 WIB setiap hari bursa", "Pukul 13.00 WIB setiap hari bursa berikutnya"],
    correctIndex: 3,
  },
  {
    question: "Sebuah perusahaan memiliki laporan kinerja keuangan sebagai berikut: - Cash and Cash Equivalent Rp 10.789 Triliun - Receivable Rp 1.572 Triliun - Inventory Rp 2.408 Triliun - Current Asset Rp 15.950 Triliun - Current Liabilities Rp 3.346 Triliun - Total Liabilities Rp 5.581 Triliun - Total Ekuitas Rp 39.594 Triliun - Total Asset Rp 45.174 Triliun Hitunglah Current Ratio perusahaan...",
    options: ["3.69", "0.12", "3.22", "4.77"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini yang bukan merupakan tanggung jawab koordinator fungsi penyelesaian transaksi efek, adalah?",
    options: ["Melakukan rekonsiliasi data transaksi kepada pihak Bank Kustodian", "Melakukan rekonsiliasi data transaksi kepada pihak Perantara Pedagang Efek", "Melakukan koordinasi dengan koordinator fungsi investasi dan riset dalam rangka pemilihan Perantara Pedagang Efek", "Melakukan pengecekan silang atas data-data yang ada pada administrasi Efek dalam portofolio Reksa Dana atau produk yang dikelola Manajer Investasi."],
    correctIndex: 2,
  },
  {
    question: "Manakah perusahaan berikut ini yang termasuk dalam kategori syariah dengan risiko terendah? - Perusahaan A dengan Debt to Aset 0.7 dan EBIT Coverage 0.8 x - Perusahaan B dengan Debt to Asset 0.50 dan EBIT Coverage 1.2 x - Perusahaan C dengan Debt to Asset 0.45 dan EBIT Coverage 2.5 x - Perusahaan D dengan Debt to Asset 0.44 dan EBIT Coverage 0.9",
    options: ["Perusahaan A", "Perusahaan D", "Perusahaan B", "Perusahaan C"],
    correctIndex: 3,
  },
  {
    question: "Spread transaksi obligasi yang tercatat sebesar 2 bps, maka setara dengan?",
    options: ["0.2%", "0.100%", "0.02%", "0.01%"],
    correctIndex: 2,
  },
  {
    question: "Anggota Bursa yang menandatangani perjanjian dengan Manajer Investasi pengelola Exchange Traded Fund (ETF) untuk melakukan penjualan atau pembelian ETF guna kepentingan diri sendiri maupun untuk kepentingan pemegang ETF adalah...",
    options: ["Sponsor", "Dana Pensiun", "Perantara Pedagang Efek", "Dealer Partisipan"],
    correctIndex: 3,
  },
  {
    question: "Yang bukan menjadi beban biaya Reksa Dana dibawah ini adalah, kecuali...",
    options: ["Biaya transfer dana sehubungan dengan transaksi unit penyertaan Reksa Dana", "Biaya Pemasaran", "Biaya Pembubaran Reksa Dana", "Biaya Bank Kustodian"],
    correctIndex: 1,
  },
  {
    question: "Fungsi Penyelesaian transaksi efek wajib dikoordinir oleh...",
    options: ["Pegawai dengan izin WPPE dengan pengalaman kerja di bagian manajer pasar modal dan/atau keuangan paling kurang 2 (dua) tahun", "Pegawai dengan izin WPPE dengan pengalaman kerja di bidang pasar modal dan/atau keuangan paling kurang 2 (dua) tahun", "Pegawai dengan izin WMI dengan pengalaman kerja di bidang pasar modal dan/atau keuangan paling kurang 2 (dua) tahun", "Pegawai dengan izin WPE dengan pengalaman kerja di bidang pasar modal dan/atau keuangan paling kurang 2 (dua) tahun"],
    correctIndex: 2,
  },
  {
    question: "Berikut ini yang merupakan definisi dari transaksi short Selling, adalah?",
    options: ["Proses perdagangan efek Dimana efek-efek yang ditransaksikan tersebut merupakan efek yang dijamin oleh bursa", "Proses perdagangan efek Dimana nasabah belum memiliki efek tersebut", "Proses perdagangan efek dengan menggunakan dana pinjaman yang disediakan oleh perusahaan sekuritas", "Proses perdagangan efek yang hanya dapat dilakukan pada perdagangan sesi 1 (satu) saja"],
    correctIndex: 1,
  },
  {
    question: "Pihak yang berkewajiban menghitung Nilai Pasar Wajar (NPW) atas Efek Dalam Portfolio Reksa Dana adalah?",
    options: ["Manajer Investasi => instrument yang liquid dinilai MI", "IBPA", "LPHE => Instrument yang tidak common atau liquid dinilai oleh LPHE", "Bank Kustodian"],
    correctIndex: 0,
  },
  {
    question: "Berikut ini adalah instrumen yang tidak memiliki risiko gagal bayar antara lain:",
    options: ["Reksadana pendapatan tetap", "Saham perusahaan yang dimiliki oleh BUMN", "Obligasi syariah yang dikeluarkan oleh perusahaan bluechip", "Surat utang negara"],
    correctIndex: 1,
  },
  {
    question: "Berikut ini yang tidak dapat dijadikan tolok ukur Reksa Dana Saham Syariah adalah",
    options: ["JII70 -> Jakarta Islamix Index", "ISSI", "INDOBEX -> obligasi konvensional", "JII"],
    correctIndex: 2,
  },
  {
    question: "Dalam keadaan suku bunga turun, manajer portfolio yang memiliki obligasi berbagai jenis akan menghadapi risiko yang tidak diinginkan berikut, kecuali:",
    options: ["Market Risk", "Reinvestment Risk", "Put Risk", "Call Risk"],
    correctIndex: 2,
  },
  {
    question: "Dalam suatu quisioner profil pemodal dari 35 investor, didapatkan hasil survey 22 investor telah berinvestasi pada instrument investasi saham, 15 investor telah berinvestasi di Reksa Dana, dan 5 Investor masih pemula belum pernah berinvestasi, maka berapa investor yang sudah berinvestasi baik di saham maupun reksa dana?",
    options: ["25", "8", "15", "7"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini yang dapat dijadikan tolok ukur Reksa Dana Saham adalah",
    options: ["Sertifikat Bank Indonesia", "Indeks Harga Saham Gabungan", "Surat Utang Negara dengan tenor 10 Tahun", "Obligasi Korporasi"],
    correctIndex: 1,
  },
  {
    question: "Berikut ini ketentuan pengelolaan Reksa Dana Syariah, kecuali?",
    options: ["Anggota Dewan Pengawas Syariah dan Tim Ahli Syariah wajib memiliki izin ASPM dari Otoritas Jasa Keuangan", "Anggota Dewan Pengawas Syariah wajib memiliki izin Wakil Manajer Investasi", "Manajer Investasi yang mengelola Reksa Dana Syariah wajib memiliki Dewan Pengawas Syariah yang ditunjuk oleh Direksi.", "Biaya yang timbul terkait pelaksanaan tugas Dewan Pengawas Syariah dan Tim Ahli Syariah menjadi beban Manajer Investasi."],
    correctIndex: 1,
  },
  {
    question: "Sebuah perusahaan memiliki laporan kinerja keuangan sebagai berikut: - Cash and Cash Equivalent Rp 10.789 Triliun - Receivable Rp 1.572 Triliun - Inventory Rp 2.408 Triliun - Current Asset Rp 15.95 Triliun - Current Liabilities Rp 3.346 Triliun - Total Liabilities Rp 5.581 Triliun - Total Ekuitas Rp 39.594 Triliun - Total Asset Rp 45.174 Triliun Hitunglah Debt to Equity Ratio perusahaan...",
    options: ["0.14", "0.12", "3.22", "0.09"],
    correctIndex: 0,
  },
  {
    question: "Dalam operasional harian Fungsi Penyelesaian transaksi efek lebih sering berkoordinasi dengan pihak berikut ini, kecuali....",
    options: ["Bank Kustodian", "Fungsi Investasi dan Riset", "Notaris", "Perantara Pedagang Efek"],
    correctIndex: 2,
  },
  {
    question: "PT PWS mendirikan kantor Penasihat Investasi dan memberikan nasihat investasi hampir diseluruh kota besar di Indonesia. Berdasarkan peraturan terkait Penasihat Investasi, larangan yang perlu diperhatikan oleh PT PWS adalah:",
    options: ["Memberikan quisioner untuk mengetahui profil risiko dari nasabah", "Merekomendasikan nasabah untuk membeli saham lebih dari 10 emiten", "Melakukan transaksi pembalian saham blue chip yang sesuai dengan profil risiko nasabah dan untuk kepentingan nasabah", "Membuat dan menyimpan catatan dokumen terkait penasihat investasi nasabah"],
    correctIndex: 2,
  },
  {
    question: "Untuk seorang investor yang akan pensiun dalam jangka waktu kurang dari 1 tahun, komposisi portofolio yang disarankan untuk investor tersebut adalah:",
    options: ["Pasar uang 5%, pendapatan tetap 45% dan saham 50%", "Pasar uang 5%, pendapatan tetap 25% dan saham 70%", "Pasar uang 10%, pendapatan tetap 60% dan saham 30%", "Pasar uang 5%, pendapatan tetap 35% dan saham 60%"],
    correctIndex: 2,
  },
  {
    question: "Sebuah perusahaan memiliki laporan kinerja keuangan sebagai berikut: - Cash and Cash Equivalent Rp 10.789 Triliun - Receivable Rp 1.572 Triliun - Inventory Rp 2.408 Triliun - Current Asset Rp 15.95 Triliun - Current Liabilities Rp 3.346 Triliun - Total Liabilities Rp 5.581 Triliun - Total Ekuitas Rp 39.594 Triliun - Total Asset Rp 45.174 Triliun Hitunglah Cash Ratio perusahaan...",
    options: ["3.69", "4.77", "0.12", "3.22"],
    correctIndex: 3,
  },
  {
    question: "Memiliki pengalaman dua tahun pada industri jasa keuangan dan memberi arahan dalam proses investasi pada suatu produk Reksa Dana adalah tugas ...",
    options: ["Komite Investasi", "Komite Manajemen Risiko", "Direktur Investasi", "Komite Manajemen Risiko"],
    correctIndex: 0,
  },
  {
    question: "Berikut ini hal-hal yang memungkinkan dilakukannya serah asset apabila terjadi pembelian kembali, kecuali...",
    options: ["Turunnya peringkat Efek Bersifat Utang dan/atau sukuk atas sebagian besar atau seluruh portofolio investasi menjadi investment grade", "Dilakukannya restrukturisasi atas Efek Bersifat Utang dan/atau sukuk oleh penerbit Efek Bersifat Utang dan/atau sukuk", "Lembaga Penilai Harga Efek tidak menerbitkan referensi Harga Pasar Wajar", "Mengalami tekanan likuiditas yang signifikan sehingga terjadi kegagalan penjualan aset dalam portofolio investasi Reksa Dana"],
    correctIndex: 0,
  },
  {
    question: "Sebuah perusahaan memiliki laba sebelum bunga dan pajak (EBIT) sebesar Rp 1,000,000, beban bunga 7% dari total utang berbunga sebesar 4,300,000 dan Depresiasi Perusahaan sebesar 500,000. Berapakah EBITDA perusahaan tersebut?",
    options: ["800,000", "1,200,000", "1,100,000", "1,500,000"],
    correctIndex: 3,
  },
  {
    question: "Berikut merupakan definisi dari Penasihat Investasi adalah?",
    options: ["Penasihat Investasi adalah Pihak yang diberikan amanah oleh Pihak lain mengenai penjualan atau pembelian Efek dengan memperoleh imbalan jasa.", "Penasihat Investasi adalah Pihak yang memberi nasihat kepada Pihak lain mengenai penjualan atau pembelian Efek dengan memperoleh imbalan jasa.", "Penasihat Investasi adalah Pihak yang memberi nasihat kepada Pihak lain mengenai penjualan atau pembelian Efek tanpa memperoleh imbalan jasa.", "Penasihat Investasi dapat sekaligus berbentuk Perseroan terbatas yang melakukan kegiatan pemeringkatan dan memberikan peringkat"],
    correctIndex: 1,
  },
  {
    question: "Sebuah perusahaan memiliki rasio keuangan sebagai berikut: - Net Profit Margin = 15% - Equity Multiplier = 2 - Equity Turn Over = 0.5 - Rasio Laba ditahan = 70% - BI Rate = 5% - Beta = 1.5 - Market return = 10% Hitunglah P/E perusahaan...",
    options: ["4.14", "5.17", "3.77", "8.37"],
    correctIndex: 0,
  },
  {
    question: "Pada POJK 17/POJK.04/2022 terdapat ketentuan penggunaan perantara pedagang efek dalam 1 (satu) tahun maksimal 30% dari total transaksi. Manakah dibawah ini transaksi yang dikecualikan dalam perhitungan tersebut...",
    options: ["Transaksi Reksa Dana ETF yang dilakukan melalui dealer partisipan", "Transaksi efek dalam rangka pembentukan portofolio Reksa Dana terproteksi yang dilakukan melalui perantara pedagang efek", "Transaksi yang dilakukan melalui pihak afiliasi manajer investasi", "Transaksi pembelian efek bersifat utang yang diterbitkan pemerintah Republik Indonesia bagi Reksa Dana pendapatan tetap Dimana pemegang unit penyertaannya adalah Dana Pensiun"],
    correctIndex: 3,
  },
  {
    question: "Manakah dari pernyataan-pernyataan berikut ini yang benar dalam menggambarkan hubungan antara perubahan tingkat bunga pasar dengan perubahan harga obligasi?",
    options: ["Jika tingkat bunga pasar turun 1%, maka harga obligasi akan naik 1%", "Jika tingkat bunga pasar turun 1%, maka harga obligasi akan turun 1%", "Jika tingkat bunga pasar turun 1%, maka harga obligasi akan naik < 1%", "Jika tingkat bunga pasar turun 1%, maka harga obligasi akan naik > 1%"],
    correctIndex: 3,
  },
  {
    question: "Manajer Investasi wajib menyimpan document terkait data nasabah selama?",
    options: ["7 Tahun", "3 tahun", "5 Tahun", "10 Tahun"],
    correctIndex: 2,
  },
  {
    question: "Sebuah obligasi diterbitkan dengan kupon 5% dan tenor 3 tahun, obligasi tersebut dihargai pada level 101.5%, hitunglah Macaulay Duration obligasi tersebut...",
    options: ["1.86", "2.86", "2.76", "1.89"],
    correctIndex: 1,
  },
  {
    question: "Pada saat membeli obligasi, dan kita menerima full price. Maka yang dimaksud dari full price adalah:",
    options: ["Harga sudah termasuk accrued interest", "Harga sudah termasuk kupon dan biaya perantara pedagang Efek", "Harga termasuk biaya perantara pedagang Efek", "Harga sudah termasuk discount rate"],
    correctIndex: 0,
  },
  {
    question: "Berikut yang merupakan kewajiban dari Bank Kustodian, kecuali:",
    options: ["Bank Kustodian wajib menghitung nilai pasar wajar", "Bank Kustodian wajib memastikan dana hasil pembelian kembali Unit Penyertaan atau likuidasi Reksa Dana disampaikan ke rekening atas nama pemegang Unit Penyertaan Reksa Dana", "Bank Kustodian wajib menerbitkan dan menyampaikan surat atau bukti konfirmasi tertulis kepemilikan Unit Penyertaan Reksa Dana", "Bank Kustodian wajib menghitung nilai aktiva bersih"],
    correctIndex: 0,
  },
  {
    question: "Portfolio Turnover dapat dihitung berdasarkan",
    options: ["Total Nilai Pembelian atau Penjualan menggunakan angka yang lebih rendah dibagi AUM Bulanan", "Total Nilai Pembelian atau Penjualan menggunakan angka yang lebih rendah dibagi rata-rata AUM Harian", "Total Nilai Pembelian atau Penjualan menggunakan angka yang lebih tinggi dibagi AUM Bulanan", "Total Nilai Pembelian atau Penjualan menggunakan angka yang lebih tinggi dibagi rata-rata AUM Harian"],
    correctIndex: 1,
  },
  {
    question: "Efek yang tidak masuk dalam kategori syariah harus dilakukan penjualan maksimal setelah...",
    options: ["20 hari bursa semenjak penetapan oleh dewan pengawas syariah Manajer Investasi", "10 hari bursa semenjak tanggal daftar efek syariah terbaru efektif", "10 hari bursa semenjak penetapan oleh dewan pengawas syariah Manajer Investasi", "20 hari bursa semenjak tanggal daftar efek syariah terbaru efektif"],
    correctIndex: 1,
  },
  {
    question: "Jika seorang Manajer Portfolio memiliki proyeksi pemerintah akan mengalokasikan dana lebih untuk subsidi masyarakat dan akan berdampak positif terhadap perekonomian, maka dia akan menambah obligasi yang memiliki",
    options: ["Membeli obligasi dengan kupon tinggi", "Membeli obligasi dengan durasi pendek", "Membeli obligasi dengan durasi panjang", "Membeli obligasi dengan yield tinggi"],
    correctIndex: 2,
  },
  {
    question: "Perusahaan Efek dan Penasihat Investasi tidak diperbolehkan untuk mengungkapkan informasi tentang nama atau kegiatan nasabah kecuali dalam situasi berikut:",
    options: ["Jika diwajibkan oleh peraturan dan undang-undang yang berlaku.", "Jika diizinkan oleh Direksi Perusahaan Sekuritas.", "Jika diizinkan oleh Bursa Efek Indonesia.", "Jika diwajibkan oleh Undang-Undang Dasar."],
    correctIndex: 0,
  },
  {
    question: "Strategi berikut ini yang paling memungkinkan dijalankan apabila terjadi potensi kenaikan suku bunga Bank Indonesia?",
    options: ["Melakukan akumulasi pada saham-saham dengan beta diatas 1x bukan", "Menambah bobot obligasi jangka Panjang bukan", "Menambah akumulasi pada saham saham dengan beta dibawah 1x bukan", "Menambah bobot deposito"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini pihak yang diwajibkan untuk menggunakan Daftar Efek Syariah sebagai acuan adalah, kecuali?",
    options: ["Venture Capital", "Perusahaan efek yang memiliki sistem online trading syariah.", "Manajer investasi yang mengelola portfolio investasi Efek Syariah di dalam negeri.", "Pihak yang menerbitkan indeks efek syariah di dalam negeri."],
    correctIndex: 0,
  },
  {
    question: "Apa yang dilambangkan oleh sumbu y (vertikal) dalam grafik Efficient Frontier?",
    options: ["Alpha.", "Beta.", "Tingkat pengembalian portofolio.", "Tingkat risiko (deviasi standar)."],
    correctIndex: 2,
  },
  {
    question: "Sebuah perusahaan memiliki rasio keuangan sebagai berikut: - Net Profit Margin = 15% - Equity Multiplier = 2 - Equity Turn Over = 0.5 - Rasio Laba ditahan = 70% - BI Rate = 5% - Beta = 1.5 - Market return = 10% Hitunglah sustainable growth rate perusahaan...",
    options: ["5.25%", "3.25%", "7%", "2.5%"],
    correctIndex: 0,
  },
  {
    question: "Obligasi A memberikan Kupon 12% per tahun, sedangkan Obligasi B memberikan Tingkat Kupon 11.5% dan dibayarkan per bulan, manakah dari investasi tersebut yang menghasilkan return lebih tinggi?",
    options: ["Obligasi B dengan return 11,200,000", "Obligasi B dengan return 11,212,593", "Obligasi A dengan return 11,212,593", "Obligasi A dengan return 11,200,000"],
    correctIndex: 1,
  },
  {
    question: "Berikut ini yang bukan merupakan hal yang dimuat pada Prospektus Reksa Dana adalah?",
    options: ["Pemegang saham dari emiten", "Komite Investasi", "Informasi mengenai Reksa Dana, Manajer Investasi, dan Bank Kustodian;", "Alokasi biaya Reksa Dana"],
    correctIndex: 0,
  },
  {
    question: "PT PWS memiliki lini bisnis di berbagai sektor, diantaranya, perhotelan, pertambangan, otomotif dan perbankan. PT PWS juga telah melantai di Bursa Efek Indonesia dengan kode saham PWSI, apabila seorang Manajer Investasi ingin memasukkan PWSI kedalam portfolio Reksa Dana Syariah, maka hal yang perlu dipertimbangkan adalah?",
    options: ["Memastikan bahwa rasio utang berbasis bunga PWSI dibawah 45% dari total asset perusahaan", "memastikan bahwa PWSI sudah tercatat pada Daftar Efek Syariah", "Segera memasukkan dalam portfolio apabila rasio utang PWSI tercatat rendah", "memastikan bahwa lini bisnis perhotelan dan perbankan tidak lebih dari 10% total pendapatan PWSI"],
    correctIndex: 1,
  },
  {
    question: "Strategi yang membangun portfolio dengan jatuh tempo terkonsentrasi pada satu titik di yield curve disebut",
    options: ["Ladder", "Bullet", "Barbell", "Semua Salah"],
    correctIndex: 1,
  },
  {
    question: "Berikut dokumen yang perlu disertakan dalam permohonan izin usaha sebagai Penasihat Investasi adalah, kecuali?",
    options: ["izin sebagai WAKIL PERANTARA PEDAGANG EFEK => Broker", "izin sebagai wakil Manajer Investasi;", "nomor pokok wajib pajak", "Formulir permohonan izin usaha Penasihat Investasi"],
    correctIndex: 0,
  },
  {
    question: "Apa yang dimaksud dengan stop-loss order dalam manajemen portofolio?",
    options: ["Perintah untuk wait and see", "Perintah untuk membeli saham hanya jika harganya turun ke tingkat tertentu buy order", "Perintah untuk menjual saham hanya jika harganya naik", "Perintah untuk menjual saham hanya jika harganya turun ke tingkat tertentu"],
    correctIndex: 3,
  },
  {
    question: "Sebuah perusahaan memiliki laporan kinerja keuangan sebagai berikut: - Cash and Cash Equivalent Rp 10.789 Triliun - Receivable Rp 1.572 Triliun - Inventory Rp 2.408 Triliun - Current Asset Rp 15.95 Triliun - Current Liabilities Rp 3.346 Triliun - Total Liabilities Rp 5.581 Triliun - Total Ekuitas Rp 39.594 Triliun - Total Asset Rp 45.174 Triliun Hitunglah Quick Ratio perusahaan...",
    options: ["3.69", "0.12", "3.22", "4.77"],
    correctIndex: 0,
  },
  {
    question: "Batasan persentase dari kepemilikan Efek yang diterbitkan oleh satu perusahaan berbadan hukum Indonesia berdasarkan Nilai Aktiva Bersih dan modal disetor Perusahaan pada Reksa Dana Syariah...",
    options: ["5% dan 20%", "10% dan 5%", "20% dan 5%", "5% dan 10%"],
    correctIndex: 2,
  },
  {
    question: "Sebuah obligasi diterbitkan dengan kupon 5% dan tenor 3 tahun, obligasi tersebut dihargai pada level 101.5%, hitunglah YTM obligasi tersebut",
    options: ["4.17%", "4.47%", "4.03%", "4.93%"],
    correctIndex: 1,
  },
  {
    question: "Setiap Penasihat Investasi wajib mengadakan, menyimpan dan memelihara catatan-catatan dan apabila diperlukan dalam pemeriksaan. berikut hal-hal yang harus disimpan oleh Penasihat Investasi, kecuali?",
    options: ["Copy dari setiap pernyataan tertulis mengenai rekomendasi termasuk perubahannya yang diberikan kepada nasabah.", "Kontrak antara nasabah dengan Penasihat Investasi.", "Catatan mengenai pengelolaan dana nasabah", "Catatan-catatan yang berkaitan dengan keputusan untuk merekomendasi nasabah membeli atau menjual suatu Efek."],
    correctIndex: 2,
  },
  {
    question: "Bagaimana cara menghitung Treynor Ratio?",
    options: ["(Ri - Rm) / σi", "(Ri - Rm) / βi", "(Ri - Rf) / σi", "(Ri - Rf) / βi"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini yang dapat direkomendasikan kepada nasabah dengan profil risiko risk adverse adalah?",
    options: ["Reksa Dana Pendapatan Tetap", "Reksa Dana Saham", "Reksa Dana ETF LQ45", "Reksa Dana Pasar Uang"],
    correctIndex: 3,
  },
  {
    question: "Dari pilihan berikut, salah satu instrumen investasi tidak memiliki risiko pasar (market risk). Manakah yang itu?",
    options: ["Deposito Bank", "Reksadana", "Obligasi korporasi", "Surat Utang Negara"],
    correctIndex: 0,
  },
  {
    question: "Berikut ini yang dapat melakukan kegiatan sebagai Agen Penjual Efek Reksa Dana (APERD), kecuali?",
    options: ["Bank Umum, perusahaan yang menyelenggarakan kegiatan usaha di bidang pos dan giro, Perusahaan pergadaian dan perusahaan perasuransian", "Perseroan yang telah memperoleh izin usaha dari Otoritas Jasa Keuangan sebagai Perusahaan Efek yang melakukan kegiatan usaha sebagai Penjamin Emisi Efek dan/atau Perantara Pedagang Efek", "Perusahaan Pembiayaan dan Dana Pensiun", "Perseroan yang telah memperoleh izin usaha dari Otoritas Jasa Keuangan sebagai Penasihat Investasi"],
    correctIndex: 2,
  },
  {
    question: "Reksa Dana ETF yang dikelola oleh PT LSPPM dalam 10 tahun terakhir memiliki rata-rata return 12% dengan standard deviasi 6%. Berapa kemungkinan Reksa Dana ETF tersebut mencatatkan kerugian apabila terbentuk distribusi normal?",
    options: ["2.5%", "5%", "-5%", "0%"],
    correctIndex: 0,
  },
  {
    question: "Batasan persentase dari kepemilikan Efek yang diterbitkan oleh satu perusahaan berbadan hukum Indonesia berdasarkan Nilai Aktiva Bersih dan modal disetor Perusahaan pada Reksa Dana berbentuk KIK...",
    options: ["10% dan 5%", "5% dan 10%", "20% dan 5%", "5% dan 20%"],
    correctIndex: 0,
  },
  {
    question: "Seorang investor memiliki portofolio investasi yang menghasilkan return tahunan sebesar 13.5% dengan return pasar (benchmark) sebesar 10%. Suku bunga bebas risiko saat ini adalah 6%. Beta portofolio tersebut adalah 1.5. Berapakah Alpha Jensen dari portofolio tersebut?",
    options: ["1.8%", "1.7%", "1.5%", "1.9%"],
    correctIndex: 2,
  },
  {
    question: "Pernyataan yang benar mengenai transaksi pada pasar tunai (T+0)...",
    options: ["Transaksi yang terjadi karena ada kesepakatan antara manajemen dimana terdapat pihak yang terafiliasi", "Transaksi yang terjadi hanya pada sesi kedua perdagangan", "Transaksi yang terjadi pada hari yang sama dengan penyelesaian transaksinya", "Transaksi yang dilakukan atas dasar transfer uang antar pemilik rekening efek"],
    correctIndex: 2,
  },
  {
    question: "Apa yang dimaksud dengan strategi buy and hold dalam manajemen portofolio?",
    options: ["Membeli aset dan menjualnya setelah jangka waktu tertentu", "Tidak melakukan transaksi pembelian atau penjualan aset", "Membeli aset dan menahannya untuk jangka waktu yang lama", "Membeli aset dan segera menjualnya untuk mendapatkan keuntungan cepat"],
    correctIndex: 2,
  },
  {
    question: "Apa yang dimaksud dengan risiko sistematis dalam manajemen portofolio?",
    options: ["Risiko yang tidak dapat dihindari", "Risiko yang dapat dihindari dengan diversifikasi", "Risiko yang mempengaruhi semua aset dalam portofolio", "Risiko yang spesifik hanya untuk satu aset"],
    correctIndex: 0,
  },
  {
    question: "Berikut yang bukan merupakan larangan Reksa Dana adalah...",
    options: ["Terlibat dalam kegiatan selain dari investasi, investasi kembali, atau perdagangan Efek", "Terlibat transaksi REPO sepanjang sudah disetujui oleh komite investasi", "Terlibat dalam transaksi marjin", "Memiliki Efek Bersifat Utang yang ditawarkan tidak melalui Penawaran Umum yang diterbitkan oleh 1 Pihak kurang dari 5% dari Nilai Aktiva Bersih Reksa Dana pada setiap saat atau secara keseluruhan lebih dari 15% dari Nilai Aktiva Bersih Reksa Dana pada setiap saat"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini yang tidak termasuk dari biaya transaksi pembelian saham adalah?",
    options: ["Pajak Penghasilan", "Biaya Kliring KPEI", "Biaya Levy", "Komisi Broker"],
    correctIndex: 0,
  },
  {
    question: "Apa yang dimaksud dengan alpha dalam konteks manajemen portofolio?",
    options: ["Tingkat pengembalian yang konsisten", "Pengembalian yang lebih tinggi dari yang diharapkan untuk tingkat risiko yang diberikan", "Risiko yang dihasilkan dari pasar secara keseluruhan", "Tingkat risiko dari kenaikan suku bunga"],
    correctIndex: 1,
  },
  {
    question: "Manajer Investasi dapat menyampaikan Nilai Pasar Wajar dari Efek dalam negeri kepada Bank Kustodian paling lambat?",
    options: ["Pukul 10.00 WIB setiap hari bursa berikutnya", "Pukul 13.00 WIB setiap hari bursa berikutnya", "Pukul 17.00 WIB setiap hari bursa berikutnya", "Pukul 17.00 WIB setiap hari bursa"],
    correctIndex: 3,
  },
  {
    question: "Berikut Dokumen dan/atau catatan yang wajib disimpan oleh Manajer Investasi, kecuali",
    options: ["Catatan atas pengelolaan investasi yang dilakukan Manajer Investasi", "Catatan atas nasihat investasi yang diberikan oleh Manajer Investasi", "Catatan yang berkaitan dengan rekening nasabah termasuk informasi mengenai nomor tunggal identitas pemodal", "Jejak audit atas seluruh transaksi Efek yang dilakukan oleh Manajer Investasi"],
    correctIndex: 1,
  },
  {
    question: "Strategi berikut ini yang paling memungkinkan dijalankan apabila terjadi potensi penurunan suku bunga Bank Indonesia?",
    options: ["Melakukan akumulasi pada saham-saham dengan beta diatas 1x", "Menambah akumulasi pada saham saham dengan beta dibawah 1x", "Menambah bobot deposito", "Menambah bobot obligasi jangka pendek"],
    correctIndex: 0,
  },
  {
    question: "Pasar Tunai merupakan transaksi yang mengalami proses settlement pada",
    options: ["T+7", "T+2 -> Pasar Reguler", "T+1", "T+0"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini urutan top down analysis yang dilakukan dalam menyusun strategi investasi adalah?",
    options: ["Analisa Makroekonomi - Analisa Sektoral - Analisa Fundamental Saham - Penentuan Universe Portfolio", "Analisa Fundamental Saham - Analisa Sektoral - Analisa Makroekonomi - Penentuan Universe Portfolio", "Analisa Sektoral - Analisa Fundamental Saham - Penentuan Universe Portfolio - Analisa Makroekonomi", "Analisa Makroekonomi - Analisa Sektoral - Penentuan Universe Portfolio - Analisa Fundamental Saham"],
    correctIndex: 0,
  },
  {
    question: "Apa yang dilambangkan oleh sumbu x (horizontal) dalam grafik Efficient Frontier?",
    options: ["Tingkat pengembalian portofolio.", "Tingkat risiko (deviasi standar).", "Beta.", "Alpha."],
    correctIndex: 1,
  },
  {
    question: "Sebuah Reksa Dana Saham memiliki data sebagai berikut: - Saham A, Return 10%, Weighted 5% - Saham B, Return 5%, Weighted 9% - Saham c, Return -5%, Weighted 7% Berapakah rata-rata return portfolio reksa dana tersebut?",
    options: ["0.45%", "0.60%", "0.50%", "3.33%"],
    correctIndex: 1,
  },
  {
    question: "Seorang investor memiliki portofolio dengan return rata-rata tahunan sebesar 12% dan volatilitas tahunan sebesar 15%. Suku bunga bebas risiko saat ini adalah 5%. Berapakah Sharpe ratio dari portofolio tersebut?",
    options: ["1.00", "0.47", "0.46", "0.80"],
    correctIndex: 1,
  },
  {
    question: "IHSG mengalami kenaikan dari level 6000 menuju 6100, dengan kondisi tersebut berapakah kenaikan saham ABSF yang memiliki beta 1.1x?",
    options: ["1.83%", "0.67%", "0.83%", "1.67%"],
    correctIndex: 0,
  },
  {
    question: "Widya seorang pekerja swasta berinvestasi dengan nilai Rp 5 Miliar dan investasi tersebut berkembang menjadi Rp 10 Miliar dan Widya mengatakan return per tahun bisa mencapai 15%, maka berapa lama waktu yang dibutuhkan untuk pengembangan nilai investasi tersebut?",
    options: ["6.5 Tahun", "5.2 Tahun", "4.8 Tahun", "5.8 Tahun"],
    correctIndex: 2,
  },
  {
    question: "Metode dalam menghitung kinerja masa lalu suatu racikan portfolio sebelum menjadi suatu produk reksa dana adalah?",
    options: ["Analisa Teknikal", "Forecasting", "Analisa Fundamental", "Back testing"],
    correctIndex: 3,
  },
  {
    question: "Perusahaan ABC memiliki harga saham Rp 80 per saham dan laba bersih per sahamnya adalah Rp 10. Jika DPR Perusahaan 50%, Tingkat imbal hasil yang diharapkan 15% dan pertumbuhan Perusahaan sebesar 8%, apakah saham ABC overvalued atau undervalued?",
    options: ["Tidak bisa ditentukan", "Fairly valued", "Undervalued", "Overvalued"],
    correctIndex: 3,
  },
  {
    question: "Sebuah perusahaan memiliki rasio keuangan sebagai berikut: - Net Profit Margin = 15% - Equity Multiplier = 2 - Equity Turn Over = 0.5 - Rasio Laba ditahan = 70% - BI Rate = 5% - Beta = 1.5 - Market return = 10% Hitunglah Return on Equity perusahaan...",
    options: ["12%", "7.5%", "8%", "10%"],
    correctIndex: 1,
  },
  {
    question: "Jika sebuah investasi memiliki pengembalian rata-rata tahunan sebesar 15%, tingkat bunga bebas risiko adalah 5%, standard deviasi 8% dan beta investasi adalah 1.5, berapakah Treynor Ratio-nya?",
    options: ["6.67%", "10.00%", "8.33%", "12.50%"],
    correctIndex: 0,
  },
  {
    question: "Apa yang dimaksud dengan analisis fundamental dalam investasi saham?",
    options: ["Menganalisis faktor-faktor ekonomi dan keuangan perusahaan untuk menilai nilai intrinsik saham.", "Melihat tingkat volatilitas harga saham untuk menentukan risiko", "Menggunakan indikator teknis untuk memprediksi pergerakan harga saham di masa depan.", "Menganalisis grafik harga historis untuk mengidentifikasi tren."],
    correctIndex: 0,
  },
  {
    question: "Sebuah perusahaan memiliki laporan kinerja keuangan sebagai berikut: - Cash and Cash Equivalent Rp 10.789 Triliun - Receivable Rp 1.572 Triliun - Inventory Rp 2.408 Triliun - Current Asset Rp 15.95 Triliun - Current Liabilities Rp 3.346 Triliun - Total Liabilities Rp 5.581 Triliun - Total Ekuitas Rp 39.594 Triliun - Total Asset Rp 45.174 Triliun Hitunglah Debt Asset Ratio perusahaan...",
    options: ["0.14", "3.22", "4.77", "0.12"],
    correctIndex: 3,
  },
  {
    question: "Berikut ini yang merupakan pihak yang menetapkan Daftar Efek Syariah adalah",
    options: ["Dewan Pengawas Syariah", "Dewan Syariah Nasional", "Bursa Efek Indonesia", "Otoritas Jasa Keuangan"],
    correctIndex: 3,
  },
  {
    question: "Berikut yang bukan merupakan larangan dari Penasihat Investasi adalah",
    options: ["meminta imbalan yang sangat tinggi dibandingkan dengan imbalan yang diminta oleh Penasihat Investasi lain yang memberikan jasa yang sama tanpa memberitahukan kepada nasabah bahwa terdapat pilihan pemberi jasa yang lain", "menjanjikan suatu hasil tertentu yang akan dicapai apabila nasabah mengikuti nasihat yang diberikan", "mengadakan, mengubah, memperpanjang, memperpendek, atau memperbaharui kontrak nasihat investasi tanpa persetujuan tertulis dari nasabah;", "memberi saran kepada nasabah yang berkaitan dengan pembelian, penjualan, atau pertukaran dari Efek atas dasar pemikiran yang rasional;"],
    correctIndex: 3,
  },
];
