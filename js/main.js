// ========================================
// DRV EVENTS - Main JavaScript
// ========================================

// ========================================
// Global Variables
// ========================================

let currentSliderIndex = 0;
let currentTestimonialIndex = 0;
let sliderAutoPlayInterval;

// ========================================
// Initialize on DOM Load
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSlider();
    initializeTestimonials();
    initializeScrollAnimations();
    initializeBackToTop();
    startSliderAutoplay();
});

// ========================================
// NAVIGATION
// ========================================

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger?.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-container')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
}

// ========================================
// HERO SLIDER
// ========================================

function initializeSlider() {
    const sliderDots = document.querySelectorAll('.slider-dot');
    
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(sliderAutoPlayInterval);
            goToSlide(index);
            startSliderAutoplay();
        });
    });
}

function showSlide(index) {
    const sliderImgs = document.querySelectorAll('.slider-img');
    const sliderDots = document.querySelectorAll('.slider-dot');

    // Wrap around
    if (index >= sliderImgs.length) {
        currentSliderIndex = 0;
    } else if (index < 0) {
        currentSliderIndex = sliderImgs.length - 1;
    } else {
        currentSliderIndex = index;
    }

    // Remove active class
    sliderImgs.forEach(img => img.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));

    // Add active class
    sliderImgs[currentSliderIndex].classList.add('active');
    sliderDots[currentSliderIndex].classList.add('active');
}

function goToSlide(index) {
    showSlide(index);
}

function nextSlide() {
    showSlide(currentSliderIndex + 1);
}

function prevSlide() {
    showSlide(currentSliderIndex - 1);
}

function startSliderAutoplay() {
    sliderAutoPlayInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds - ENHANCED SPEED
}

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================

function initializeTestimonials() {
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    prevBtn?.addEventListener('click', () => {
        currentTestimonialIndex--;
        showTestimonial();
    });

    nextBtn?.addEventListener('click', () => {
        currentTestimonialIndex++;
        showTestimonial();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentTestimonialIndex--;
            showTestimonial();
        }
        if (e.key === 'ArrowRight') {
            currentTestimonialIndex++;
            showTestimonial();
        }
    });
}

function showTestimonial() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');

    // Wrap around
    if (currentTestimonialIndex >= testimonialItems.length) {
        currentTestimonialIndex = 0;
    } else if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonialItems.length - 1;
    }

    // Remove active class
    testimonialItems.forEach(item => item.classList.remove('active'));

    // Add active class
    testimonialItems[currentTestimonialIndex].classList.add('active');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.event-card, .service-card, .stat-card, .about-image').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// BACK TO TOP BUTTON
// ========================================

function initializeBackToTop() {
    window.addEventListener('scroll', () => {
        const backToTopBtn = document.querySelector('.back-to-top');
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    });

    const backToTopBtn = document.querySelector('.back-to-top');
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// PHONE NUMBER FORMATTING
// ========================================

function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1,2})(\d{1,5})(\d{1,5})(\d{1,3})$/);
    if (match) {
        return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
    }
    return phoneNumber;
}

// ========================================
// FORM HANDLING (For Contact & Career Pages)
// ========================================

function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Prepare WhatsApp message
        let message = 'Hello DRV Events,\n\n';
        
        for (let [key, value] of Object.entries(data)) {
            message += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
        }

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // WhatsApp API
        const whatsappUrl = `https://wa.me/8319111085?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Show success message
        showNotification('Form submitted! WhatsApp will open with your details.', 'success');
        form.reset();
    });
}

// ========================================
// NOTIFICATION FUNCTION
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#25d366' : '#d4af37'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// PARALLAX SCROLL EFFECT
// ========================================

function initializeParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;
            
            if (distance > -1000 && distance < window.innerHeight) {
                element.style.transform = `translateY(${distance * 0.5}px)`;
            }
        });
    });
}

// ========================================
// LAZY LOADING IMAGES
// ========================================

function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ========================================
// COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 50);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for resize events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// ANALYTICS TRACKING
// ========================================

function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Track phone button clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('phone_call', {
            'phone_number': link.getAttribute('href')
        });
    });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('whatsapp_click', {
            'type': 'whatsapp'
        });
    });
});

// ========================================
// PAGE PERFORMANCE
// ========================================

// Log performance metrics
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// ========================================
// EXPORT FUNCTIONS
// ========================================

window.DRVEvents = {
    handleFormSubmit,
    showNotification,
    trackEvent,
    formatPhoneNumber,
    nextSlide,
    prevSlide
};
