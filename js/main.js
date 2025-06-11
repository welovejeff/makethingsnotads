// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // For this demo, just show a success message
            // In a real implementation, you would send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            // You would normally use fetch() here to submit to an API endpoint
            // Example:
            // fetch('your-endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, message }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            // });
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