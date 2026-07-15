document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("course-title").textContent = courseInfo.title;
  document.getElementById("course-subtitle").textContent = courseInfo.subtitle;
  document.getElementById("course-description").textContent = courseInfo.description;

  initTabs();
  initLessonsPanel();
  initVideoSection(bkkGuides, "bkk-list", "bkk-viewer");
  initMaterials();
  initQuiz();
});

function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
}

function initVideoSection(items, listElId, viewerElId) {
  const list = document.getElementById(listElId);
  const viewer = document.getElementById(viewerElId);

  if (!items.length) {
    list.innerHTML = "<p style='padding:16px;color:var(--muted)'>Belum ada video.</p>";
    return;
  }

  items.forEach((lesson, index) => {
    const item = document.createElement("div");
    item.className = "lesson-item" + (index === 0 ? " active" : "");
    item.textContent = `${index + 1}. ${lesson.title}`;
    item.addEventListener("click", () => {
      list.querySelectorAll(".lesson-item").forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      renderLesson(lesson, viewer);
    });
    list.appendChild(item);
  });

  renderLesson(items[0], viewer);
}

function initLessonsPanel() {
  const list = document.getElementById("lesson-list");
  const viewer = document.getElementById("lesson-viewer");
  list.innerHTML = "";

  const selectLeaf = (leafEl, item) => {
    list.querySelectorAll(".lesson-item, .element-item").forEach((el) => el.classList.remove("active"));
    leafEl.classList.add("active");
    renderLesson(item, viewer);
  };

  lessons.forEach((lesson, index) => {
    const item = document.createElement("div");
    item.className = "lesson-item" + (index === 0 ? " active" : "");
    item.textContent = lesson.title;
    item.addEventListener("click", () => selectLeaf(item, lesson));
    list.appendChild(item);
  });

  kkModules.forEach((kk) => {
    const kkGroup = document.createElement("div");
    kkGroup.className = "kk-group";

    const kkHeader = document.createElement("div");
    kkHeader.className = "kk-header";
    kkHeader.innerHTML = `<span class="chevron">&#9656;</span> ${kk.title}`;
    kkHeader.addEventListener("click", () => kkGroup.classList.toggle("expanded"));
    kkGroup.appendChild(kkHeader);

    const kkBody = document.createElement("div");
    kkBody.className = "kk-body";

    kk.units.forEach((unit) => {
      const ukGroup = document.createElement("div");
      ukGroup.className = "uk-group";

      const ukHeader = document.createElement("div");
      ukHeader.className = "uk-header";
      ukHeader.innerHTML = `<span class="chevron">&#9656;</span> ${unit.title}`;
      ukHeader.addEventListener("click", () => ukGroup.classList.toggle("expanded"));
      ukGroup.appendChild(ukHeader);

      const ukBody = document.createElement("div");
      ukBody.className = "uk-body";

      unit.elements.forEach((element) => {
        const elItem = document.createElement("div");
        elItem.className = "element-item";
        elItem.textContent = element.title;
        elItem.addEventListener("click", () => selectLeaf(elItem, element));
        ukBody.appendChild(elItem);
      });

      ukGroup.appendChild(ukBody);
      kkBody.appendChild(ukGroup);
    });

    kkGroup.appendChild(kkBody);
    list.appendChild(kkGroup);
  });

  if (lessons.length) {
    renderLesson(lessons[0], viewer);
  } else if (kkModules.length && kkModules[0].units.length && kkModules[0].units[0].elements.length) {
    renderLesson(kkModules[0].units[0].elements[0], viewer);
  }
}

function renderLesson(lesson, viewer) {
  const embedUrl =
    lesson.provider === "youtube"
      ? `https://www.youtube.com/embed/${lesson.youtubeId}`
      : `https://drive.google.com/file/d/${lesson.driveFileId}/preview`;
  viewer.innerHTML = `
    <div class="video-frame-wrap">
      <iframe src="${embedUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <h3>${lesson.title}</h3>
    <p>${lesson.description || ""}</p>
  `;
}

function initMaterials() {
  const container = document.getElementById("materials-list");

  if (!materials.length) {
    container.innerHTML = "<p style='color:var(--muted)'>Belum ada materi.</p>";
    return;
  }

  materials.forEach((material) => {
    const card = document.createElement("div");
    card.className = "material-card";
    card.innerHTML = `
      <span class="title">${material.title}</span>
      <a href="${material.file}" target="_blank" rel="noopener">Buka PDF</a>
    `;
    container.appendChild(card);
  });
}

function initQuiz() {
  const form = document.getElementById("quiz-form");
  const resultBox = document.getElementById("quiz-result");

  if (!quizQuestions.length) {
    form.innerHTML = "<p style='color:var(--muted)'>Belum ada soal try out.</p>";
    return;
  }

  quizQuestions.forEach((q, qIndex) => {
    const block = document.createElement("div");
    block.className = "quiz-question";
    block.id = `quiz-q-${qIndex}`;

    const optionsHtml = q.options
      .map(
        (opt, oIndex) => `
        <label class="quiz-option">
          <input type="radio" name="q${qIndex}" value="${oIndex}" />
          <span>${opt}</span>
        </label>`
      )
      .join("");

    block.innerHTML = `<p class="q-text">${qIndex + 1}. ${q.question}</p>${optionsHtml}`;
    form.appendChild(block);
  });

  const nameInput = document.getElementById("quiz-name");

  document.getElementById("submit-quiz").addEventListener("click", async () => {
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.focus();
      nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    let correctCount = 0;

    quizQuestions.forEach((q, qIndex) => {
      const block = document.getElementById(`quiz-q-${qIndex}`);
      const selected = form.querySelector(`input[name="q${qIndex}"]:checked`);
      const selectedValue = selected ? Number(selected.value) : null;
      const isCorrect = selectedValue === q.correctIndex;

      block.classList.remove("correct", "incorrect");
      block.classList.add(isCorrect ? "correct" : "incorrect");

      const oldTag = block.querySelector(".answer-tag");
      if (oldTag) oldTag.remove();

      const tag = document.createElement("div");
      tag.className = "answer-tag " + (isCorrect ? "correct" : "incorrect");
      tag.textContent = isCorrect
        ? "Benar"
        : `Salah — jawaban benar: ${q.options[q.correctIndex]}`;
      block.appendChild(tag);

      if (isCorrect) correctCount++;
    });

    const total = quizQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div class="score">${correctCount} / ${total}</div>
      <div>Skor: ${percentage}%</div>
      <div class="save-status" id="save-status">Menyimpan skor...</div>
    `;
    resultBox.scrollIntoView({ behavior: "smooth", block: "center" });

    const saveStatus = document.getElementById("save-status");
    if (typeof window.saveQuizResult === "function") {
      const result = await window.saveQuizResult({ name, score: correctCount, total, percentage });
      saveStatus.textContent = result.saved
        ? "Skor berhasil disimpan."
        : "Skor belum tersimpan ke server (konfigurasi belum lengkap).";
    } else {
      saveStatus.textContent = "Skor belum tersimpan ke server (konfigurasi belum lengkap).";
    }
  });
}
