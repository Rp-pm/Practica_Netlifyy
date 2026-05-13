let lastX = 0;
let lastY = 0;
let lastT = performance.now();

document.addEventListener("mousemove", (e) => {
  const now = performance.now();

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const dt = now - lastT || 16;

  const speed = Math.sqrt(dx * dx + dy * dy) / dt;

  // mapare viteză → glitch (ajustează 0.2 după gust)
  const glitch = Math.min(speed * 2, 20);

  document.documentElement.style.setProperty("--glitch-offset", `${glitch}px`);

  lastX = e.clientX;
  lastY = e.clientY;
  lastT = now;
});