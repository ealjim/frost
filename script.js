const greetingEl = document.getElementById("greeting");
const toastEl = document.getElementById("toast");
const scheduleBtn = document.getElementById("scheduleBtn");
const bottomButtons = document.querySelectorAll(".bottom-btn");

function setGreeting() {
  const hour = new Date().getHours();
  let greeting = "Good morning, Jon";

  if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon, Jon";
  } else if (hour >= 17) {
    greeting = "Good evening, Jon";
  }

  greetingEl.textContent = greeting;
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");

  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2400);
}

setGreeting();

scheduleBtn.addEventListener("click", () => {
  showToast("Appointment request started. A banker will contact you shortly.");
  document.getElementById("appointment-panel").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

bottomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    if (target === "appointment-panel") {
      document.getElementById(target).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      showToast("Opening appointment section.");
      return;
    }

    if (target === "statements") {
      showToast("Account statements opened.");
    } else if (target === "history") {
      showToast("Transaction history opened.");
    } else if (target === "forms") {
      showToast("Forms section opened.");
    }
  });
});
