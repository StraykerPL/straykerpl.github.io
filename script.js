document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeSmoothScroll();
    initializeTypingEffect();
    initializeTechItems();
});

function initializeAnimations() {
    const fadeElements = document.querySelectorAll('.section-title, .about-image, .about-text, .portfolio-item, .tech-item, .contact-info, .contact-cta');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => observer.observe(element));
}

function initializeSmoothScroll() {
    const headerOffset = 70;
    const scrollOptions = {
        behavior: 'smooth',
        block: 'start'
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({ top: 0, ...scrollOptions });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({ top: targetPosition, ...scrollOptions });
            }
        });
    });
}

function initializeTypingEffect() {
    const heroHeading = document.querySelector('.hero h1');
    if (!heroHeading) return;

    const originalText = heroHeading.textContent;
    heroHeading.textContent = '';
    
    let currentIndex = 0;
    const typingSpeed = 100;

    function typeNextCharacter() {
        if (currentIndex < originalText.length) {
            heroHeading.textContent += originalText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeNextCharacter, typingSpeed);
        }
    }

    typeNextCharacter();
}

function initializeTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('tech-item-hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('tech-item-hover');
        });
    });
}

window.addEventListener('beforeunload', () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click');
    });

    document.querySelectorAll('.tech-item').forEach(item => {
        item.removeEventListener('mouseenter');
        item.removeEventListener('mouseleave'); 
    });
});
