let current = 1;

function nextStep(n) {
  document.getElementById('step' + current).classList.remove('active');
  current = n;
  document.getElementById('step' + current).classList.add('active');
  document.getElementById('stepNum').textContent = current;

  if (current === 5) {
    document.getElementById('bgMusic').play();
    
    // Confetti + Hearts
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const myConfetti = confetti.create(canvas, { resize: true });

    const end = Date.now() + 7000;
    (function frame() {
      myConfetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff3366','#ff69b4'] });
      myConfetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff3366','#ff69b4'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    // Floating Hearts
    for (let i = 0; i < 35; i++) {
      setTimeout(() => {
        let h = document.createElement('div');
        h.style.position = 'fixed';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.fontSize = '35px';
        h.style.zIndex = '9998';
        h.style.animation = 'floatHeart ' + (4 + Math.random() * 4) + 's linear forwards';
        h.innerHTML = '❤️';
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 10000);
      }, i * 120);
    }
  }
}

// Start
document.getElementById('step1').classList.add('active');