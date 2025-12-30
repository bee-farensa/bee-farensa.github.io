
// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = startX + 'px';
    particle.style.bottom = '-10px';
    particle.style.background = `linear-gradient(135deg, #ff6ec4, #7873f5)`;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Generate particles periodically
setInterval(createParticle, 300);

// Initial batch of particles
for (let i = 0; i < 15; i++) {
    setTimeout(createParticle, i * 200);
}
