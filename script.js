document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById('greeting');
    setTimeout(() => {
        greeting.style.opacity = 1;
    }, 500);
document.getElementById('changeMessageBtn').addEventListener('click', function() {
  const messages = [
    "You're my everything!",
    "I LOVE YOUUU SOO MUCHH",
    "My HEART beats for you ml !!",
    "forever and always ❤️",
    "You're the completion of my life ngl HAHAHSHSS"
  ];
  // Randomly pick a message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Change the text content of the sweet message
  document.querySelector('.sweet-message').textContent = randomMessage;
});
