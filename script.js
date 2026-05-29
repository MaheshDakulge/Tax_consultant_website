document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Navigation Header Scroll Effect
    // -------------------------------------------------------------
    const mainHeader = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // -------------------------------------------------------------
    // 2. Active Section Tracker for Navigation Links
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleActiveLink = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleActiveLink);

    // -------------------------------------------------------------
    // 3. Theme Toggle (Dark & Light)
    // -------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage for preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }

    // -------------------------------------------------------------
    // 4. Mobile Menu Toggle
    // -------------------------------------------------------------
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navigationMenu = document.getElementById('navigation-menu');
    const menuIcon = mobileMenuToggle.querySelector('i');

    mobileMenuToggle.addEventListener('click', () => {
        navigationMenu.classList.toggle('active');
        const isActive = navigationMenu.classList.contains('active');
        
        if (isActive) {
            menuIcon.className = 'fa-solid fa-xmark';
        } else {
            menuIcon.className = 'fa-solid fa-bars-staggered';
        }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigationMenu.classList.remove('active');
            menuIcon.className = 'fa-solid fa-bars-staggered';
        });
    });

    // -------------------------------------------------------------
    // 5. Contact Form Submission handling (Dynamic)
    // -------------------------------------------------------------
    const contactForm = document.getElementById('portfolio-contact-form');
    const statusMsg = document.getElementById('form-status-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple mockup feedback
            statusMsg.textContent = 'Sending message...';
            statusMsg.className = 'form-status';
            
            setTimeout(() => {
                statusMsg.textContent = 'Thank you! Your message was sent successfully.';
                statusMsg.className = 'form-status success';
                contactForm.reset();
            }, 1200);
        });
    }

    // -------------------------------------------------------------
    // 6. Interactive Cursor Shadow Effect (Background Glow Track)
    // -------------------------------------------------------------
    const glowSphere3 = document.querySelector('.glow-sphere-3');
    
    document.addEventListener('mousemove', (e) => {
        if (glowSphere3 && window.innerWidth > 992) {
            const x = e.clientX;
            const y = e.clientY;
            
            // Subtly shift third sphere towards cursor
            glowSphere3.style.transform = `translate(calc(${x}px - 50vw), calc(${y}px - 50vh)) scale(1)`;
        }
    });
});
