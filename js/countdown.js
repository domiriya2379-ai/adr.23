// Countdown to HackFest, by Joshika R
(function () {
  const daysEl = document.querySelector("#days");
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");
  const messageEl = document.querySelector("#countdownMessage");

  // Only run on the page that has the countdown
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const eventDate = new Date("2026-12-12T09:00:00+05:30");
  let timer = null;

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function updateCountdown() {
    const difference = eventDate.getTime() - Date.now();

    if (difference <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (messageEl) messageEl.textContent = "🎉 HackFest is live now!";
      if (timer) clearInterval(timer);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
})();
