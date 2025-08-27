// Main celebration function - called when button is clicked
function celebrate() {
  // Wrap everything in try-catch for error handling
  try {
    // Check if page is fully loaded before proceeding
    if (!document || document.readyState === 'loading') {
      throw new Error('Document not ready');
    }
    
    // Get references to HTML elements we need
    const audio = document.getElementById("birthdaySong");
    const button = document.querySelector("button");

    // Safety check: make sure elements exist before using them
    if (!audio || !button) {
      throw new Error('Required DOM elements not found');
    }

    // AUDIO PLAYBACK
    // Reset audio to beginning and play it
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Modern browsers block autoplay - handle gracefully
      console.log('Audio playback failed - user interaction may be required');
    });

    // BUTTON INTERACTION
    // Temporarily disable button to prevent spam clicking
    button.disabled = true;
    button.style.opacity = 0.6; // Visual feedback that it's disabled
    
    // Re-enable button after 2 seconds
    setTimeout(() => {
      button.disabled = false;
      button.style.opacity = 1;
    }, 2000);

    // CONFETTI ANIMATION
    // Check if confetti library loaded successfully
    if (typeof confetti === 'function') {
      // First burst - lots of particles
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }, // Start 60% down the screen
      });

      // Second burst after 400ms - medium particles
      setTimeout(() => {
        confetti({ particleCount: 70, spread: 90, origin: { y: 0.6 } });
      }, 400);

      // Third burst after 800ms - fewer particles
      setTimeout(() => {
        confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 } });
      }, 800);
    }
  } catch (error) {
    // Log any errors that occur during celebration
    console.log('Celebration failed:', error.message);
  }
}
