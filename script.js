// script.js
function celebrate() {
  const audio = document.getElementById("birthdaySong");
  const button = document.querySelector("button");

  // Restart the audio every time
  audio.currentTime = 0;
  audio.play();

  // Disable button briefly to prevent spamming
  button.disabled = true;
  button.style.opacity = 0.6;
  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = 1;
  }, 2000); // re-enable after 2 seconds

  // Confetti burst effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  setTimeout(() => {
    confetti({ particleCount: 70, spread: 90, origin: { y: 0.6 } });
  }, 400);

  setTimeout(() => {
    confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 } });
  }, 800);
}
