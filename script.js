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

  // Optionally, repeat a few bursts
  setTimeout(() => {
    confetti({ particleCount: 70, spread: 90, origin: { y: 0.6 } });
  }, 400);

  setTimeout(() => {
    confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 } });
  }, 800);
}