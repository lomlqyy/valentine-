document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById('greeting');
    setTimeout(() => {
        greeting.style.opacity = 1;
    }, 500);
});
document.getElementById('changeMessageBtn').addEventListener('click', function() {
  const messages = [
    "You're my everything!",
    "Together, we're unstoppable!",
    "My heart beats for you!",
    "Forever and always, R+S ❤️",
    "You make my life complete!"
  ];

  // Randomly pick a message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Change the text content of the sweet message
  document.querySelector('.sweet-message').textContent = randomMessage;
});
