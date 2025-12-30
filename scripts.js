
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

const translations = {
    id: {
        "hero-tagline": "✨ Creative Designer & Developer ✨",
        "hero-cta": "Mari Bekerja Sama",
        "about-title": "Tentang Saya",
        "about-p1": "Halo! ✨ Aku adalah seorang Creative Designer yang passionate dalam menciptakan karya digital yang menarik dan fungsional.",
        "about-p2": "Aku percaya bahwa kombinasi antara kreativitas dan teknologi dapat menciptakan sesuatu yang luar biasa. Mari kita ciptakan sesuatu yang amazing bersama! 💫",
        "projects-title": "Proyek Saya",
        "p1-title": "Desain Kreatif",
        "p1-desc": "Deskripsi tentang project desain kreatif yang spesial dan unik.",
        "p2-title": "Pengembangan Web",
        "p2-desc": "Membangun website responsif dengan teknologi modern.",
        "contact-title": "Ayo Terhubung!",
        "contact-email": "Email Saya"
    },
    en: {
        "hero-tagline": "✨ Creative Designer & Web Developer ✨",
        "hero-cta": "Let's Work Together",
        "about-title": "About Me",
        "about-p1": "Hello! ✨ I am a Creative Designer passionate about creating engaging and functional digital works.",
        "about-p2": "I believe that the combination of creativity and technology can create something extraordinary. Let's create something amazing together! 💫",
        "projects-title": "My Projects",
        "p1-title": "Creative Design",
        "p1-desc": "Description of a creative design project that is special and unique.",
        "p2-title": "Web Development",
        "p2-desc": "Building responsive websites with modern technology.",
        "contact-title": "Let's Connect!",
        "contact-email": "Email Me"
    }
};

function setLanguage(lang) {
    const elements = translations[lang];
    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Gunakan innerHTML jika ada tag <strong> atau ✨
            el.innerHTML = elements[id];
        }
    });
    localStorage.setItem('lang', lang);
}

// Cek bahasa saat halaman dimuat
window.onload = () => {
    const savedLang = localStorage.getItem('lang') || 'id';
    setLanguage(savedLang);
};
