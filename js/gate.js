document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("password-gate");
  const app = document.getElementById("app");
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");

  const unlock = () => {
    gate.style.display = "none";
    app.style.display = "block";
  };

  if (localStorage.getItem("qualifin_unlocked") === "true") {
    unlock();
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === SITE_PASSWORD) {
      localStorage.setItem("qualifin_unlocked", "true");
      unlock();
    } else {
      error.textContent = "Password salah, silakan coba lagi.";
      input.value = "";
      input.focus();
    }
  });
});
