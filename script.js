// Animate progress bars when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.width = `${progress}%`;
        }
    });
}, { threshold: 0.5 });

// Observe all progress bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    observer.observe(bar);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            menuToggle.classList.remove('active');
            navLinks.classList.remove('show');
        }
    });
});

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    animateOnScroll.observe(section);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize animation for skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = `${progress}%`;
        }, 500);
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
});

// Animate timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`;
});

// Add hover effect to interest cards
const interestCards = document.querySelectorAll('.interest-card');
interestCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('i').style.transform = 'scale(1) rotate(0)';
    });
});

// Gallery filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Photo upload functionality
const uploadForm = document.getElementById('photoUploadForm');
const uploadArea = document.querySelector('.upload-area');
const photoInput = document.getElementById('photoInput');

uploadArea.addEventListener('click', () => {
    photoInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = var('--hover-color');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = var('--accent-color');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = var('--accent-color');
    photoInput.files = e.dataTransfer.files;
});

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your photo upload logic here
    alert('Photo upload feature coming soon!');
    uploadForm.reset();
});