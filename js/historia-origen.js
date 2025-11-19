// Fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});




// 淡入效果�?JavaScript
function checkFadeIn() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// 监听滚动事件
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// 章节导航逻辑
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const prevBtn = document.querySelector('.prev-section');
    const nextBtn = document.querySelector('.next-section');
    let currentSectionIndex = 0;

    function updateNavigation() {
        prevBtn.classList.toggle('disabled', currentSectionIndex === 0);
        nextBtn.classList.toggle('disabled', currentSectionIndex === sections.length - 1);
    }

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSectionIndex = index;
            updateNavigation();
        }
    }

    prevBtn.addEventListener('click', () => {
        if (currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }
    });

    // 初始化导航状�?            updateNavigation();

    // 检测当前活跃的章节
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSectionIndex = Array.from(sections).indexOf(entry.target);
                updateNavigation();
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));
});

