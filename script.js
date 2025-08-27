// script.js
function celebrate() {
  const audio = document.getElementById("birthdaySong");
  const button = document.querySelector("button");

  // Check if elements exist
  if (!audio || !button) return;

  // Restart the audio every time
  audio.currentTime = 0;
  audio.play().catch(() => {
    // Handle autoplay restrictions gracefully
    console.log('Audio playback failed - user interaction may be required');
  });

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
