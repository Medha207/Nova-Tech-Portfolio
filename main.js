// NovaTech Solutions Brochure Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    // Reveal sections on scroll
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
        revealObserver.observe(section);
    });

    // Smooth scroll for navbar links
    document.querySelectorAll('.nav-links a, .btn-primary').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting on scroll
    const navObserverOptions = {
        threshold: 0.5
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    document.querySelectorAll('section').forEach(section => {
        navObserver.observe(section);
    });

    // Enhanced Contact Form Logic
    const contactForm = document.getElementById('premium-contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-send');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            
            // Loading State
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            btnIcon.className = 'fas fa-spinner fa-spin btn-icon';
            formFeedback.className = 'form-feedback';
            formFeedback.style.display = 'none';

            // Simulate API Request
            setTimeout(() => {
                const isSuccess = Math.random() > 0.1; // 90% success rate for simulation

                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                btnIcon.className = 'fas fa-paper-plane btn-icon';

                if (isSuccess) {
                    formFeedback.textContent = 'Success! Your message has been sent. We will contact you shortly.';
                    formFeedback.className = 'form-feedback success';
                    contactForm.reset();
                } else {
                    formFeedback.textContent = 'Oops! Something went wrong. Please try again later.';
                    formFeedback.className = 'form-feedback error';
                }

                // Auto-hide feedback
                setTimeout(() => {
                    formFeedback.style.display = 'none';
                }, 6000);

            }, 2000);
        });
    }

    // Console log for senior-dev "signature"
    console.log('%c Digital Ninjas ', 'background: #0a192f; color: #64ffda; font-size: 20px; font-weight: bold; padding: 10px; border: 1px solid #64ffda;');
    console.log('Premium Brochure Engine Initialized. Pixel-perfect layout confirmed.');
});

// Add subtle parallax effect to glass cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .hero-img-wrapper');
    const x = (window.innerWidth / 2 - e.pageX) / 80;
    const y = (window.innerHeight / 2 - e.pageY) / 80;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});
