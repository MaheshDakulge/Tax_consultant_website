document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Scroll Reveal Animations (IntersectionObserver)
    // -------------------------------------------------------------
    const revealObserverOptions = {
        root: null,
        threshold: 0.1,
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

                // Trigger Sequenced Timeline Progress Fill
                const progressFill = entry.target.querySelector('#progress-bar');
                if (progressFill && !progressFill.classList.contains('animated')) {
                    progressFill.classList.add('animated');
                    animateTimelineProgressBar(progressFill);
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
        const duration = 1600; // total duration of the animation in ms
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
    // 3. Sequenced Timeline Progress Fill
    // -------------------------------------------------------------
    function animateTimelineProgressBar(bar) {
        // Animate width of the bar to 100%
        bar.style.width = '100%';

        // Sequenced activations for each timeline point circle
        const circle2 = document.getElementById('pt-circle-2');
        const circle3 = document.getElementById('pt-circle-3');
        const circle4 = document.getElementById('pt-circle-4');

        setTimeout(() => {
            if (circle2) circle2.classList.add('active');
        }, 450); // Activate Step 2 circle at ~33% visual width

        setTimeout(() => {
            if (circle3) circle3.classList.add('active');
        }, 900); // Activate Step 3 circle at ~66% visual width

        setTimeout(() => {
            if (circle4) circle4.classList.add('active');
        }, 1350); // Activate Step 4 circle at 100% visual width
    }

    // -------------------------------------------------------------
    // 4. Interactive Service Showcase Tab Switcher
    // -------------------------------------------------------------
    const serviceTabItems = document.querySelectorAll('.service-tab-item');
    const previewImg = document.getElementById('service-preview-img');
    const previewName = document.getElementById('preview-advisor-name');
    const previewTitle = document.getElementById('preview-advisor-title');

    if (serviceTabItems.length > 0 && previewImg) {
        serviceTabItems.forEach(tab => {
            tab.addEventListener('click', () => {
                // Ignore if clicked tab is already active
                if (tab.classList.contains('active')) return;

                // 1. Remove active state from current tab items
                serviceTabItems.forEach(item => item.classList.remove('active'));

                // 2. Set active state on clicked tab item
                tab.classList.add('active');

                // 3. Extract metadata from data attributes
                const newImgSrc = tab.getAttribute('data-image');
                const newName = tab.getAttribute('data-name');
                const newTitle = tab.getAttribute('data-title');

                // 4. Smoothly cross-fade the left panel visual card content
                previewImg.style.opacity = '0';
                previewImg.style.transform = 'scale(0.97)';
                
                setTimeout(() => {
                    // Update image and text content
                    previewImg.setAttribute('src', newImgSrc);
                    if (previewName) previewName.textContent = newName;
                    if (previewTitle) previewTitle.textContent = newTitle;

                    // Fade back in with dynamic transform
                    previewImg.style.opacity = '1';
                    previewImg.style.transform = 'scale(1)';
                }, 280); // Corresponds nicely with transition speeds
            });
        });
    }

    // -------------------------------------------------------------
    // 5. Navbar Scroll Handling
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
    handleNavbarScroll(); // Initial execution on DOM loading

    // -------------------------------------------------------------
    // 6. Mobile Drawer & Hamburg Controls
    // -------------------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navDrawer = document.querySelector('.nav-drawer');
    const drawerItems = document.querySelectorAll('.drawer-item');

    if (hamburger && navDrawer) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navDrawer.classList.toggle('open');
        });

        // Close drawer upon clicking menu links (excluding collapsible category triggers)
        drawerItems.forEach(item => {
            if (!item.classList.contains('mobile-dropdown-btn')) {
                item.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navDrawer.classList.remove('open');
                });
            }
        });
    }

    // Mobile Knowledge Bank dropdown toggle
    const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn');
    const mobileMegaMenu = document.querySelector('.mobile-mega-menu');

    if (mobileDropdownBtn && mobileMegaMenu) {
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
    // 7. Minimalist Editorial Accordion FAQ Controls
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item-minimal');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn-minimal');
        
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all open items
            faqItems.forEach(i => {
                i.classList.remove('open');
                const iBtn = i.querySelector('.faq-btn-minimal');
                if (iBtn) iBtn.setAttribute('aria-expanded', 'false');
            });

            // Toggle click event
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // -------------------------------------------------------------
    // 8. Contact Form Submissions (Mocking API AJAX Feedback)
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Enter loading state
            submitBtn.textContent = 'Sending Message...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.75';

            setTimeout(() => {
                // Success state transition
                submitBtn.textContent = '✓ Message Sent Successfully';
                submitBtn.style.background = '#2ECC71'; // Accent green success color
                submitBtn.style.borderColor = '#2ECC71';
                submitBtn.style.opacity = '1';
                
                // Clear fields
                contactForm.reset();

                // Revert button back after a small period
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                }, 3000);

            }, 1400);
        });
    }

    // -------------------------------------------------------------
    // 9. Regulatory Disclaimer Modal Control Overlay
    // -------------------------------------------------------------
    const disclaimerTrigger = document.getElementById('disclaimer-trigger');
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const modalCloseBtn = disclaimerModal ? disclaimerModal.querySelector('.modal-close') : null;
    const modalCloseOkBtn = disclaimerModal ? disclaimerModal.querySelector('.btn-close-modal') : null;

    const showModal = (e) => {
        if (e) e.preventDefault();
        if (disclaimerModal) {
            disclaimerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const hideModal = () => {
        if (disclaimerModal) {
            disclaimerModal.classList.remove('active');
            document.body.style.overflow = '';
        }
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

    if (disclaimerModal) {
        disclaimerModal.addEventListener('click', (e) => {
            if (e.target === disclaimerModal) {
                hideModal();
            }
        });
    }
});
