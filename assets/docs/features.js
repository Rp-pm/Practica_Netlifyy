const cards = document.querySelectorAll(".feature-wrapper");

let mouseX = 0.5;
let mouseY = 0.5;

let smoothX = 0.5;
let smoothY = 0.5;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;
});

function animate() {
  smoothX += (mouseX - smoothX) * 0.08;
  smoothY += (mouseY - smoothY) * 0.08;

  cards.forEach((el, i) => {

    const depth = i + 1;

    const intensity = (6 - i) * 12;

    const moveX = (smoothX - 0.5) * intensity;
    const moveY = (smoothY - 0.5) * intensity;

    const rotateX = (smoothY - 0.5) * -8;
    const rotateY = (smoothX - 0.5) * 8;

    const float = Math.sin(Date.now() * 0.001 + i) * 2;

    el.style.transform = `
      perspective(1000px)
      translate3d(${moveX}px, ${moveY + float}px, ${depth * 10}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${1 + i * 0.01})
    `;
  });

  requestAnimationFrame(animate);
}

animate();