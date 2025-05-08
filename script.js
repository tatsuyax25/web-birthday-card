// script.js
function celebrate() {
  const audio = document.getElementById('birthdaySong');
  audio.play();

  // Confetti burst effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}