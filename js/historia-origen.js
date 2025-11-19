const observerOptions = {
    threshold: 0.3
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Horizontal navigation
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const prevBtn = document.querySelector('.prev-section');
    const nextBtn = document.querySelector('.next-section');
    let currentIndex = 0;

    function updateNav() {
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex === sections.length - 1);
    }

    function goTo(index) {
        if (index >= 0 && index < sections.length) {
            window.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
            currentIndex = index;
            updateNav();
        }
    }

    prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    updateNav();

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                currentIndex = [...sections].indexOf(e.target);
                updateNav();
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(sec => sectionObserver.observe(sec));
});