document.addEventListener("DOMContentLoaded", function() {
  const emojis = document.querySelectorAll('.emoji');
  const width = window.innerWidth;
  const height = window.innerHeight;

  emojis.forEach(emoji => {
    const randomLeft = Math.random() * width;
    const randomDuration = Math.random() * 5 + 5; // duração aleatória entre 5s e 10s

    emoji.style.left = `${randomLeft}px`;
    emoji.style.animationDuration = `${randomDuration}s`;

    emoji.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  });
});
