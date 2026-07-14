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

  const lock = (message) => {
    localStorage.removeItem("qualifin_unlocked_hash");
    gate.style.display = "flex";
    app.style.display = "none";
    error.textContent = message || "Password Anda sudah tidak berlaku. Hubungi admin untuk password baru.";
  };

  function watchPasswordValidity() {
    setInterval(async () => {
      const hash = localStorage.getItem("qualifin_unlocked_hash");
      if (!hash) return;
      const result = await window.checkPasswordHashValid(hash);
      if (!result.ok) lock();
    }, 5 * 60 * 1000);
  }

  const storedHash = localStorage.getItem("qualifin_unlocked_hash");
  if (storedHash) {
    unlock();
    window.checkPasswordHashValid(storedHash).then((result) => {
      if (!result.ok) lock();
    });
    watchPasswordValidity();
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
      localStorage.setItem("qualifin_unlocked_hash", result.hash);
      unlock();
      watchPasswordValidity();
    } else if (result.reason === "not_configured") {
      error.textContent = "Sistem belum dikonfigurasi. Hubungi admin.";
    } else {
      error.textContent = "Password salah, silakan coba lagi.";
      input.value = "";
      input.focus();
    }
  });
});
