document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Scroll Reveal Animations (IntersectionObserver)
    // -------------------------------------------------------------
    const revealObserverOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate stats numbers if this section contains them
                const animateNumbers = entry.target.querySelectorAll('.number-animate');
                animateNumbers.forEach(num => {
                    if (!num.classList.contains('animated')) {
                        animateCounter(num);
                    }
                });

                // Fill how-it-works progress line if this section is hit
                const progressFill = entry.target.querySelector('#progress-bar');
                if (progressFill) {
                    progressFill.style.width = '100%';
                }

                // Stop observing this element once it has revealed itself
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // -------------------------------------------------------------
    // 2. Animated Stats Counters
    // -------------------------------------------------------------
    function animateCounter(el) {
        el.classList.add('animated');
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600; // ms
        const stepTime = Math.max(Math.floor(duration / target), 15);
        
        const timer = setInterval(() => {
            start += Math.ceil(target / (duration / stepTime));
            if (start >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = start + suffix;
            }
        }, stepTime);
    }

    // -------------------------------------------------------------
    // 3. Navbar Scroll Class Toggle
    // -------------------------------------------------------------
    const navbar = document.querySelector('.navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Trigger immediately to capture initial page load scroll position

    // -------------------------------------------------------------
    // 4. Mobile Menu Navigation Hamburger Toggle
    // -------------------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navDrawer = document.querySelector('.nav-drawer');
    const drawerItems = document.querySelectorAll('.drawer-item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navDrawer.classList.toggle('open');
    });

    // Close drawer when clicking any link that is NOT the mobile-dropdown
    drawerItems.forEach(item => {
        if (!item.classList.contains('mobile-dropdown-btn')) {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navDrawer.classList.remove('open');
            });
        }
    });

    // Collapsible Mobile Dropdown in Drawer
    const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn');
    const mobileMegaMenu = document.querySelector('.mobile-mega-menu');

    if (mobileDropdownBtn) {
        mobileDropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMegaMenu.classList.toggle('active');
            const chevron = mobileDropdownBtn.querySelector('i');
            if (chevron) {
                chevron.classList.toggle('fa-chevron-down');
                chevron.classList.toggle('fa-chevron-up');
            }
        });
    }

    // -------------------------------------------------------------
    // 5. FAQ Accordion Logic (Single Item Expanded at a time)
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('open');
                const icon = i.querySelector('.faq-icon i');
                if (icon) {
                    icon.className = 'fa-solid fa-plus';
                }
            });

            // If the item clicked wasn't already open, open it
            if (!isOpen) {
                item.classList.add('open');
                const currentIcon = item.querySelector('.faq-icon i');
                if (currentIcon) {
                    currentIcon.className = 'fa-solid fa-plus'; // Rotated via CSS transition transform
                }
            }
        });
    });

    // -------------------------------------------------------------
    // 6. Contact Form Mock AJAX Submission
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Enter loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.75';

            setTimeout(() => {
                // Success feedback state
                submitBtn.textContent = '✓ Message Sent';
                submitBtn.style.background = '#1a7a4a'; // Success green background
                submitBtn.style.opacity = '1';
                
                // Clear fields
                contactForm.reset();

                // Revert button back after a few seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                }, 3000);

            }, 1500);
        });
    }

    // -------------------------------------------------------------
    // 7. Disclaimer Modal Overlay Controls
    // -------------------------------------------------------------
    const disclaimerTrigger = document.getElementById('disclaimer-trigger');
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const modalCloseBtn = disclaimerModal.querySelector('.modal-close');
    const modalCloseOkBtn = disclaimerModal.querySelector('.btn-close-modal');

    const showModal = (e) => {
        if (e) e.preventDefault();
        disclaimerModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    const hideModal = () => {
        disclaimerModal.classList.remove('active');
        document.body.style.overflow = ''; // Resume background scrolling
    };

    if (disclaimerTrigger) {
        disclaimerTrigger.addEventListener('click', showModal);
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', hideModal);
    }

    if (modalCloseOkBtn) {
        modalCloseOkBtn.addEventListener('click', hideModal);
    }

    // Close modal if user clicks on overlay background
    disclaimerModal.addEventListener('click', (e) => {
        if (e.target === disclaimerModal) {
            hideModal();
        }
    });
});
