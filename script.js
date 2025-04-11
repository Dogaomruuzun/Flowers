document.getElementById("musicBtn").addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();
  });
  
  const items = ["🌸", "🌷", "🌼", "💐", "🌺", "🌻", "❤️", "💖", "💕", "💘"];
  const total = 100;
  
  for (let i = 0; i < total; i++) {
    const el = document.createElement("div");
    el.className = "falling";
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.fontSize = `${1.5 + Math.random() * 2.5}rem`;
    el.style.animationDuration = `${4 + Math.random() * 5}s`;
    el.style.top = `-${Math.random() * 100}px`;
    document.body.appendChild(el);
  }
  
  const messages = [
    "i love you 💖",
    "you are my sunshine ☀️",
    "my heart is yours 💘",
    "forever and always 💍",
    "i miss you 💌",
    "you make me smile 😊",
    "with you, everything is better 🌈",
    "you are my favorite person 🥰"
  ];
  
  let current = 0;
  const messageEl = document.getElementById("loveMessage");
  
  setInterval(() => {
    messageEl.style.opacity = 0;
  
    setTimeout(() => {
      current = (current + 1) % messages.length;
      messageEl.textContent = messages[current];
      messageEl.style.opacity = 1;
    }, 1000);
  }, 5000);
  