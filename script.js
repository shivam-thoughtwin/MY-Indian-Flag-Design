const flag = document.querySelector('.flag');
const chakra = document.querySelector('.chakra');

let rotationAngle = 0;

function animateChakra() {
  rotationAngle += 1;
  chakra.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
  requestAnimationFrame(animateChakra);
}

animateChakra();
