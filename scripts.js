// Modular Functions
function initClouds() {
    console.log('Clouds initialized (CSS-driven)');
}

function initNav() {
    // Top Nav
    const topNav = document.getElementById('top-nav');
    topNav.classList.remove('hidden');
    topNav.style.opacity = '0';
    topNav.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        topNav.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        topNav.style.opacity = '1';
        topNav.style.transform = 'translateY(0)';
        document.querySelector('.top-nav-link').classList.add('animate-pulse');
        setTimeout(() => document.querySelector('.top-nav-link').classList.remove('animate-pulse'), 3000);
    }, 100);

    // Bottom Nav
    const bottomNav = document.getElementById('bottom-nav');
    bottomNav.classList.remove('hidden');
    bottomNav.style.opacity = '0';
    bottomNav.style.transform = 'translateX(-50px)';
    setTimeout(() => {
        bottomNav.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        bottomNav.style.opacity = '1';
        bottomNav.style.transform = 'translateX(0)';
        document.querySelector('.nav-link').classList.add('animate-pulse');
        setTimeout(() => document.querySelector('.nav-link').classList.remove('animate-pulse'), 3000);
    }, 200); // Slight delay for stagger

    initNavActive(); // Shared spy for both
}

function initNavActive() {
    const sections = ['home', 'features', 'about'];
    const allLinks = document.querySelectorAll('.nav-link, .top-nav-link'); // Both navs

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.id;
                allLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === activeSection) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) observer.observe(el);
    });
}

function initHovers() {
    document.querySelectorAll('.feature-card').forEach(card => card.classList.add('hover-holo'));
    document.querySelectorAll('.testimonial-card').forEach(card => card.classList.add('hover-holo'));
}

function initScrollReveals() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach((card, i) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(card);
    });

    document.querySelectorAll('.testimonial-card').forEach((card, i) => {
        card.classList.add('reveal', 'scale');
        card.style.transitionDelay = `${i * 0.2}s`;
        observer.observe(card);
    });

    document.querySelector('.animate-fade-in').classList.add('active');
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initClouds();
    initNav();
    initHovers();
    initScrollReveals();
    initSmoothScroll();
    console.log('Aether Portal: Top nav added!');
});