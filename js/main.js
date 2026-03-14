// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Copyright year
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile hamburger nav
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('nav-open');
            hamburger.classList.toggle('is-open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Close on nav link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-open');
                hamburger.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('nav-open');
                hamburger.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('nav-open');
                hamburger.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Scroll Animation
    const animateSections = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fadeInUp');
            }
        });
    };
    
    // Run on initial load
    animateSections();
    
    // Run on scroll
    window.addEventListener('scroll', animateSections);
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // AI Process Flow Animation
    const processFlow = document.querySelector('.process-flow');
    if (processFlow) {
        const processSteps = processFlow.querySelectorAll('.process-step');
        
        const highlightSteps = () => {
            const processTop = processFlow.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (processTop < windowHeight * 0.75) {
                let delay = 0;
                processSteps.forEach((step, index) => {
                    setTimeout(() => {
                        step.classList.add('highlight');
                    }, delay);
                    delay += 300; // Add delay between each step
                });
                // Remove event listener once animation is triggered
                window.removeEventListener('scroll', highlightSteps);
            }
        };
        
        // Run on scroll
        window.addEventListener('scroll', highlightSteps);
        // Check on initial load
        highlightSteps();
    }
    
    // Creative Circus case study toggle
    const circusToggle = document.getElementById("circus-toggle");
    const circusDetails = document.getElementById("circus-details");
    if (circusToggle && circusDetails) {
        circusToggle.addEventListener("click", () => {
            circusDetails.classList.toggle("show");
            circusToggle.textContent = circusDetails.classList.contains("show") ? "Hide Results" : "View Results";
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100, // Offset for the header
                    behavior: 'smooth'
                });
            }
        });
    });
}); 