document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("password-gate");
  const app = document.getElementById("app");
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");
  const submitBtn = form.querySelector("button[type=submit]");

  const unlock = () => {
    gate.style.display = "none";
    app.style.display = "block";
  };

  if (localStorage.getItem("qualifin_unlocked") === "true") {
    unlock();
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.textContent = "";
    submitBtn.disabled = true;
    submitBtn.textContent = "Memeriksa...";

    const result = await window.checkClientPassword(input.value);

    submitBtn.disabled = false;
    submitBtn.textContent = "Masuk";

    if (result.ok) {
      localStorage.setItem("qualifin_unlocked", "true");
      unlock();
    } else if (result.reason === "not_configured") {
      error.textContent = "Sistem belum dikonfigurasi. Hubungi admin.";
    } else {
      error.textContent = "Password salah, silakan coba lagi.";
      input.value = "";
      input.focus();
    }
  });
});
