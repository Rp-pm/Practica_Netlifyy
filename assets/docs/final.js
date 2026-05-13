let lastX = 0;
let lastY = 0;
let lastTime = performance.now();

document.addEventListener("mousemove", (e) => {

  const now = performance.now();
  const dt = now - lastTime;

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  // position normalized
  const mx = e.clientX / window.innerWidth;
  const my = e.clientY / window.innerHeight;

  // rotation values
  const rx = (mx - 0.5) * 2;
  const ry = (my - 0.5) * 2;

  // mouse speed → glitch intensity
  const dist = Math.sqrt(dx * dx + dy * dy);
  const speed = dt > 0 ? dist / dt : 0;
  const glitch = Math.min(speed * 3, 30);

  // apply CSS variables
  document.documentElement.style.setProperty("--rx", rx);
  document.documentElement.style.setProperty("--ry", ry);
  document.documentElement.style.setProperty("--mx", mx);
  document.documentElement.style.setProperty("--my", my);
  document.documentElement.style.setProperty("--glitch-offset", glitch);

  // hologram movement
  const holo = document.getElementById("holo");
  holo.style.transform = `
    translate3d(${rx * 25}px, ${ry * 25}px, 0)
    scale(1.02)
  `;

  lastX = e.clientX;
  lastY = e.clientY;
  lastTime = now;
});