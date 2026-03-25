// ========================================
// DRV EVENTS - 3D Elements & Animations
// ========================================

// ========================================
// Initialize 3D Scene
// ========================================

function initialize3D() {
    createParticleEffects();
    createFloatingElements();
    initializeHeroAnimation();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initialize3D);

// ========================================
// PARTICLE EFFECTS
// ========================================

function createParticleEffects() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Create particles using CSS and JavaScript
    const particleCount = 100; // ENHANCED: Doubled particle count for premium effect
    
    // ENHANCED: Increased color variety and glow effects
    const particleColors = [
        'rgba(232, 213, 55, ',  // Enhanced Gold
        'rgba(240, 168, 200, ', // Enhanced Pink
        'rgba(255, 248, 224, '  // Light Gold
    ];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const colorBase = particleColors[Math.floor(Math.random() * particleColors.length)];
        const opacity = Math.random() * 0.8 + 0.2;
        const size = Math.random() * 5 + 1;
        const duration = Math.random() * 25 + 15;
        const animationVariation = Math.random() > 0.5 ? 'float' : 'floatParallax';
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${colorBase}${opacity}), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 ${Math.random() * 15 + 5}px ${colorBase}${Math.max(opacity * 0.8, 0.3)});
            animation: ${animationVariation} ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 8}s;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// FLOATING ELEMENTS
// ========================================

function createFloatingElements() {
    const hero3DContainer = document.getElementById('hero3D');
    if (!hero3DContainer) return;

    // Create CSS 3D effects
    hero3DContainer.style.cssText = `
        perspective: 1000px;
        transform-style: preserve-3d;
    `;

    // Create floating decoration elements - ENHANCED with more elements
    const elements = [
        { icon: '💍', delay: 0 },
        { icon: '💐', delay: 1 },
        { icon: '✨', delay: 2 },
        { icon: '🕯️', delay: 3 },
        { icon: '🎭', delay: 4 },
        { icon: '👑', delay: 5 },
        { icon: '💎', delay: 6 },
        { icon: '🌹', delay: 7 }
    ];

    elements.forEach((el, index) => {
        const floatingEl = document.createElement('div');
        floatingEl.textContent = el.icon;
        floatingEl.style.cssText = `
            position: absolute;
            font-size: ${4 + Math.random() * 2}rem;
            opacity: ${0.15 + Math.random() * 0.15};
            animation: floatParallax ${20 + Math.random() * 15}s infinite ease-in-out;
            animation-delay: ${el.delay * 1.5}s;
            top: ${Math.random() * 80 + 10}%;
            left: ${Math.random() * 80 + 10}%;
            pointer-events: none;
            filter: drop-shadow(0 0 30px rgba(232, 213, 55, 0.5)) drop-shadow(0 0 20px rgba(240, 168, 200, 0.3));
            transform: scaleZ(1);
        `;
        hero3DContainer.appendChild(floatingEl);
    });
}

// ========================================
// HERO ANIMATION
// ========================================

function initializeHeroAnimation() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    // Parallax mouse movement effect
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX / window.innerWidth) * 20 - 10;
        const moveY = (e.clientY / window.innerHeight) * 20 - 10;

        heroContent.style.transform = `
            perspective(1000px)
            rotateX(${moveY * 0.5}deg)
            rotateY(${moveX * 0.5}deg)
            translateZ(20px)
        `;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function animateOnScroll() {
    const elements = document.querySelectorAll('[data-scroll-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-scroll-animate');
                entry.target.style.animation = `${animationType} 0.8s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// ========================================
// GLITCH EFFECT
// ========================================

function createGlitchEffect(element) {
    element.style.position = 'relative';
    
    const glitchClone1 = element.cloneNode(true);
    const glitchClone2 = element.cloneNode(true);
    
    glitchClone1.style.cssText = `
        position: absolute;
        left: -2px;
        top: 0;
        z-index: -1;
        color: #d4af37;
        clip-path: inset(0 0 65% 0);
        animation: glitch1 0.15s infinite;
    `;
    
    glitchClone2.style.cssText = `
        position: absolute;
        left: 2px;
        top: 0;
        z-index: -1;
        color: #e8d5d0;
        clip-path: inset(35% 0 0 0);
        animation: glitch2 0.15s infinite;
    `;
    
    element.appendChild(glitchClone1);
    element.appendChild(glitchClone2);
}

// ========================================
// 3D CARD FLIP EFFECT
// ========================================

function createCardFlipEffect(cardElement) {
    cardElement.style.cssText = `
        perspective: 1000px;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
    `;

    cardElement.addEventListener('mouseenter', function() {
        this.style.transform = 'rotateY(5deg) rotateX(-5deg) scale(1.02)';
    });

    cardElement.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateY(0) rotateX(0) scale(1)';
    });

    cardElement.addEventListener('mousemove', (e) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;
        
        cardElement.style.transform = `
            perspective(1000px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;
    });
}

// Apply to service cards
document.querySelectorAll('.service-card').forEach(card => {
    createCardFlipEffect(card);
});

// ========================================
// GLASSMORPHISM EFFECT
// ========================================

function applyGlassmorphism(element) {
    element.style.cssText += `
        background: rgba(255, 255, 255, 0.05) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    `;
}

// ========================================
// GRADIENT TEXT ANIMATION
// ========================================

function animateGradientText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    const gradient = `linear-gradient(90deg, #d4af37, #f0e6d2, #e8d5d0, #d4af37)`;
    
    element.style.cssText = `
        background: ${gradient};
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 3s ease infinite;
    `;
    
    element.textContent = text;
}

// ========================================
// CSS ANIMATIONS (injected into style)
// ========================================

function injectAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(20px, -20px) rotate(5deg);
            }
            50% {
                transform: translate(0, -40px) rotate(0deg);
            }
            75% {
                transform: translate(-20px, -20px) rotate(-5deg);
            }
        }

        @keyframes float3D {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotateZ(0deg);
                opacity: 0.1;
            }
            50% {
                transform: translateY(-50px) translateX(20px) rotateZ(10deg);
                opacity: 0.2;
            }
        }

        @keyframes glitch1 {
            0%, 100% {
                clip-path: inset(0 0 65% 0);
                transform: translate(0);
            }
            20% {
                clip-path: inset(25% 0 35% 0);
                transform: translate(-2px, 2px);
            }
            40% {
                clip-path: inset(50% 0 10% 0);
                transform: translate(2px, -2px);
            }
            60% {
                clip-path: inset(10% 0 60% 0);
                transform: translate(-1px, 1px);
            }
            100% {
                clip-path: inset(0 0 65% 0);
                transform: translate(0);
            }
        }

        @keyframes glitch2 {
            0%, 100% {
                clip-path: inset(35% 0 0 0);
                transform: translate(0);
            }
            20% {
                clip-path: inset(10% 0 80% 0);
                transform: translate(2px, 2px);
            }
            40% {
                clip-path: inset(35% 0 35% 0);
                transform: translate(-2px, -2px);
            }
            60% {
                clip-path: inset(80% 0 10% 0);
                transform: translate(1px, 1px);
            }
            100% {
                clip-path: inset(35% 0 0 0);
                transform: translate(0);
            }
        }

        @keyframes gradientShift {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        @keyframes slideIn {
            from {
                transform: translateX(100px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100px);
                opacity: 0;
            }
        }

        @keyframes pulse2 {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        @keyframes shine {
            0% {
                background-position: -1000px 0;
            }
            100% {
                background-position: 1000px 0;
            }
        }

        .shine {
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
            background-size: 200% 200%;
            animation: shine 3s infinite;
        }
    `;
    document.head.appendChild(style);
}

// Call on load
injectAnimations();

// ========================================
// PARALLAX DEPTH EFFECT
// ========================================

function createParallaxDepth(element, depth = 20) {
    element.style.transformStyle = 'preserve-3d';
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        
        element.style.transform = `
            perspective(1000px)
            rotateX(${y}deg)
            rotateY(${x}deg)
            translateZ(${depth}px)
        `;
    });
}

// ========================================
// MORPHING BACKGROUND
// ========================================

function createMorphingBackground(element) {
    const shapes = ['circle', 'ellipse', 'polygon'];
    let currentShape = 0;
    
    setInterval(() => {
        element.style.borderRadius = currentShape === 0 ? '50%' : 
                                     currentShape === 1 ? '40% 60% 70% 30% / 40% 50% 60% 50%' :
                                     '20% 80% 40% 60% / 60% 40% 80% 20%';
        currentShape = (currentShape + 1) % shapes.length;
    }, 3000);
}

// ========================================
// SCROLL REVEAL WITH 3D EFFECT
// ========================================

function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.cssText = `
                    animation: revealIn 0.8s ease-out forwards;
                    transform: perspective(1000px);
                `;
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
}

// Add reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    @keyframes revealIn {
        0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(90deg) translateY(50px);
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0) translateY(0);
        }
    }
`;
document.head.appendChild(revealStyle);

// ========================================
// EXPORT FUNCTIONS
// ========================================

window.DRVEvents3D = {
    createGlitchEffect,
    createCardFlipEffect,
    applyGlassmorphism,
    animateGradientText,
    createParallaxDepth,
    createMorphingBackground,
    initializeScrollReveal
};
