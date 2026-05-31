/* ============================================================
   Jinke & Associates — Main JavaScript
   All audit fixes applied: Carousel, Parallax, Stagger,
   WhatsApp tooltip, Button micro-interactions, Nav active,
   Page loader, Form feedback, Counter observer, Ripple
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------
    // 0. Page Load Entrance Animation (thin top progress bar)
    // -------------------------------------------------------------
    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        window.addEventListener('load', () => {
            pageLoader.classList.add('done');
            setTimeout(() => { pageLoader.style.display = 'none'; }, 500);
        });
        // Fallback: remove after 2s
        setTimeout(() => {
            pageLoader.classList.add('done');
            setTimeout(() => { pageLoader.style.display = 'none'; }, 500);
        }, 2000);
    }

    // -------------------------------------------------------------
    // 1. Scroll Reveal Animations (IntersectionObserver)
    // -------------------------------------------------------------
    const revealObserverOptions = { root: null, threshold: 0.1, rootMargin: '0px' };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const animateNumbers = entry.target.querySelectorAll('.number-animate');
                animateNumbers.forEach(num => {
                    if (!num.classList.contains('animated')) animateCounter(num);
                });
                const progressFill = entry.target.querySelector('#progress-bar');
                if (progressFill && !progressFill.classList.contains('animated')) {
                    progressFill.classList.add('animated');
                    animateTimelineProgressBar(progressFill);
                }
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Standalone counter observer — catches counters outside .reveal wrappers
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains('animated')) {
                    animateCounter(entry.target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.number-animate').forEach(el => counterObserver.observe(el));

    // Stagger animations for grid children
    const staggerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.stagger-item');
                items.forEach((item, i) => {
                    setTimeout(() => item.classList.add('visible'), i * 110);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stagger-parent').forEach(el => staggerObserver.observe(el));

    // -------------------------------------------------------------
    // 2. Animated Stats Counters
    // -------------------------------------------------------------
    function animateCounter(el) {
        el.classList.add('animated');
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const stepTime = Math.max(Math.floor(duration / target), 15);
        const timer = setInterval(() => {
            start += Math.ceil(target / (duration / stepTime));
            if (start >= target) { el.textContent = target + suffix; clearInterval(timer); }
            else { el.textContent = start + suffix; }
        }, stepTime);
    }

    // -------------------------------------------------------------
    // 3. Sequenced Timeline Progress Fill
    // -------------------------------------------------------------
    function animateTimelineProgressBar(bar) {
        bar.style.width = '100%';
        const circle2 = document.getElementById('pt-circle-2');
        const circle3 = document.getElementById('pt-circle-3');
        const circle4 = document.getElementById('pt-circle-4');
        setTimeout(() => { if (circle2) circle2.classList.add('active'); }, 450);
        setTimeout(() => { if (circle3) circle3.classList.add('active'); }, 900);
        setTimeout(() => { if (circle4) circle4.classList.add('active'); }, 1350);
    }

    // -------------------------------------------------------------
    // 4. Interactive Service Showcase Tab Switcher
    // -------------------------------------------------------------
    const serviceTabItems = document.querySelectorAll('.service-tab-item');
    const previewImg = document.getElementById('service-preview-img');
    const previewName = document.getElementById('preview-advisor-name');
    const previewTitle = document.getElementById('preview-advisor-title');
    const previewBtn = document.getElementById('preview-advisor-btn');

    if (serviceTabItems.length > 0 && previewImg) {
        serviceTabItems.forEach(tab => {
            tab.addEventListener('click', () => {
                if (tab.classList.contains('active')) return;
                serviceTabItems.forEach(item => item.classList.remove('active'));
                tab.classList.add('active');
                const newImgSrc = tab.getAttribute('data-image');
                const newName = tab.getAttribute('data-name');
                const newTitle = tab.getAttribute('data-title');
                const newBtnText = tab.getAttribute('data-btn-text') || 'Learn More';
                const newLink = tab.getAttribute('data-link') || '#contact';
                
                previewImg.style.opacity = '0';
                previewImg.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    previewImg.setAttribute('src', newImgSrc);
                    if (previewName) previewName.textContent = newName;
                    if (previewTitle) previewTitle.textContent = newTitle;
                    if (previewBtn) {
                        previewBtn.textContent = newBtnText;
                        previewBtn.setAttribute('href', newLink);
                    }
                    previewImg.style.opacity = '1';
                    previewImg.style.transform = 'scale(1)';
                }, 280);
            });
        });
    }

    // -------------------------------------------------------------
    // 5. Testimonial Carousel (BUG 4 fix — real multi-slide logic)
    // -------------------------------------------------------------
    const testimonials = [
        {
            quote: '"Their tax planning service gave us complete clarity and saved us significantly. The advice wasn\'t just basic legal compliance — it was strategic, growth-oriented, and highly customized to our SME challenges."',
            name: 'Rajesh Patil',
            role: 'Director, Patil Enterprises, Nanded',
            avatar: 'images/testimonial_avatar.jpg'
        },
        {
            quote: '"Filing ITR for my family business used to be a nightmare every year. Jinke & Associates handled everything end-to-end, got us maximum deductions, and we haven\'t had a single notice since. Truly exceptional service."',
            name: 'Priya Deshmukh',
            role: 'Proprietor, Deshmukh Retail, Nanded',
            avatar: 'images/testimonial_avatar.jpg'
        },
        {
            quote: '"As an NRI returning to India, FEMA compliance and residency taxation seemed daunting. The team explained everything patiently, filed all the paperwork, and gave us a clear compliance roadmap. Highly recommended."',
            name: 'Sunil Mehta',
            role: 'NRI Client, Dubai & Pune',
            avatar: 'images/testimonial_avatar.jpg'
        },
        {
            quote: '"GST filing was causing delays in our invoicing every month. Since we engaged Jinke & Associates, monthly GSTR filings happen on time, ITC is reconciled accurately, and we\'ve seen zero notices from the GST department."',
            name: 'Anita Jadhav',
            role: 'CFO, Jadhav Manufacturing Pvt. Ltd.',
            avatar: 'images/testimonial_avatar.jpg'
        }
    ];

    let currentTestimonialIdx = 0;
    const quoteEl = document.querySelector('.testimonial-quote-text');
    const authorNameEl = document.querySelector('.testimonial-author-name');
    const authorRoleEl = document.querySelector('.testimonial-author-role');
    const authorAvatarImg = document.querySelector('.testimonial-author-avatar img');
    const navArrow = document.querySelector('.testimonial-nav-arrow');
    const prevArrow = document.querySelector('.testimonial-prev-arrow');
    const dotsContainer = document.querySelector('.testimonial-dots');

    function renderTestimonialDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        testimonials.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot' + (i === currentTestimonialIdx ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
            dot.addEventListener('click', () => goToTestimonial(i));
            dotsContainer.appendChild(dot);
        });
    }

    function goToTestimonial(idx) {
        if (!quoteEl) return;
        const card = document.querySelector('.testimonial-card-new');
        if (card) { card.style.opacity = '0'; card.style.transform = 'translateY(10px)'; }
        setTimeout(() => {
            currentTestimonialIdx = (idx + testimonials.length) % testimonials.length;
            const t = testimonials[currentTestimonialIdx];
            if (quoteEl) quoteEl.textContent = t.quote;
            if (authorNameEl) authorNameEl.textContent = t.name;
            if (authorRoleEl) authorRoleEl.textContent = t.role;
            if (authorAvatarImg) authorAvatarImg.setAttribute('src', t.avatar);
            renderTestimonialDots();
            if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }
        }, 300);
    }

    if (navArrow) {
        navArrow.addEventListener('click', () => goToTestimonial(currentTestimonialIdx + 1));
    }
    if (prevArrow) {
        prevArrow.addEventListener('click', () => goToTestimonial(currentTestimonialIdx - 1));
    }
    renderTestimonialDots();

    // Auto-rotate every 6 seconds
    if (quoteEl) {
        setInterval(() => goToTestimonial(currentTestimonialIdx + 1), 6000);
    }

    // -------------------------------------------------------------
    // 6. Navbar Scroll Handling + Dynamic Header Height
    // -------------------------------------------------------------
    const siteHeader = document.querySelector('.site-header');
    const scrollTopBtn = document.querySelector('.fab-scroll-top');

    function setHeaderHeight() {
        if (siteHeader) {
            const h = siteHeader.offsetHeight;
            document.documentElement.style.setProperty('--header-height', h + 'px');
        }
    }
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);

    const handleScroll = () => {
        if (siteHeader) {
            if (window.scrollY > 60) siteHeader.classList.add('scrolled');
            else siteHeader.classList.remove('scrolled');
        }
        if (scrollTopBtn) {
            scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
        }

        // Parallax on hero
        const heroCard = document.querySelector('.hero-inset-card');
        if (heroCard && window.scrollY < window.innerHeight) {
            heroCard.style.backgroundPositionY = (window.scrollY * 0.3) + 'px';
        }

        // Parallax on about image box
        const aboutImgBox = document.querySelector('.about-img-box');
        if (aboutImgBox) {
            const rect = aboutImgBox.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                aboutImgBox.style.transform = `translateY(${(window.scrollY - aboutImgBox.offsetTop) * 0.04}px)`;
            }
        }
    };

    let rafPending = false;
    window.addEventListener('scroll', () => {
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(() => { handleScroll(); rafPending = false; });
        }
    });
    handleScroll();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // -------------------------------------------------------------
    // 7. Mobile Drawer & Hamburger Controls
    // -------------------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navDrawer = document.querySelector('.nav-drawer');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const drawerItems = document.querySelectorAll('.drawer-item');

    function openDrawer() {
        if (hamburger) hamburger.classList.add('active');
        if (navDrawer) navDrawer.classList.add('open');
        if (drawerOverlay) drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (hamburger) hamburger.classList.remove('active');
        if (navDrawer) navDrawer.classList.remove('open');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger && navDrawer) {
        hamburger.addEventListener('click', () => {
            if (navDrawer.classList.contains('open')) closeDrawer();
            else openDrawer();
        });
        drawerItems.forEach(item => {
            if (!item.classList.contains('mobile-dropdown-btn')) {
                item.addEventListener('click', closeDrawer);
            }
        });
    }
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // Mobile Knowledge Bank dropdown toggle
    const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    mobileDropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const menu = btn.nextElementSibling;
            if (menu) menu.classList.toggle('active');
            const chevron = btn.querySelector('i');
            if (chevron) {
                chevron.classList.toggle('fa-chevron-down');
                chevron.classList.toggle('fa-chevron-up');
            }
        });
    });

    // -------------------------------------------------------------
    // 8. Active Nav Link Detection (BUG 3 fix)
    // -------------------------------------------------------------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item, .drawer-item').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const hrefPage = href.split('/').pop();
        if (hrefPage === currentPage || 
            (currentPage === '' && (hrefPage === 'index.html' || hrefPage === '')) ||
            (currentPage === 'index.html' && (hrefPage === 'index.html' || hrefPage === ''))) {
            link.classList.add('page-active');
        }
    });

    // -------------------------------------------------------------
    // 9. Minimalist Editorial Accordion FAQ Controls
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item-minimal');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn-minimal');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(i => {
                i.classList.remove('open');
                const iBtn = i.querySelector('.faq-btn-minimal');
                if (iBtn) iBtn.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // -------------------------------------------------------------
    // 10. Contact Form Submissions (BUG 5 fix — full feedback)
    // -------------------------------------------------------------
    const allForms = document.querySelectorAll('#contactForm, #contactPageForm, #contact-form-main');
    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            form.querySelectorAll('[required]').forEach(field => {
                field.style.borderColor = '';
                if (!field.value.trim()) {
                    field.style.borderColor = '#E74C3C';
                    field.style.boxShadow = 'inset 0 0 0 2px #E74C3C';
                    valid = false;
                }
            });
            if (!valid) return;
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending Message...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.75';

            // Remove any existing success messages
            const existing = form.querySelector('.form-success-msg');
            if (existing) existing.remove();

            setTimeout(() => {
                submitBtn.textContent = '✓ Message Sent Successfully';
                submitBtn.style.background = '#27AE60';
                submitBtn.style.borderColor = '#27AE60';
                submitBtn.style.opacity = '1';

                // Show full-width success message
                const successDiv = document.createElement('div');
                successDiv.className = 'form-success-msg';
                successDiv.innerHTML = '✓ Your message has been received. We\'ll respond within 24 hours.';
                form.insertBefore(successDiv, submitBtn);

                form.reset();
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                    successDiv.style.opacity = '0';
                    setTimeout(() => successDiv.remove(), 500);
                }, 4000);
            }, 1800);
        });
    });

    // -------------------------------------------------------------
    // 11. Regulatory Disclaimer Modal Control
    // -------------------------------------------------------------
    const disclaimerTrigger = document.getElementById('disclaimer-trigger');
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const modalCloseBtn = disclaimerModal ? disclaimerModal.querySelector('.modal-close') : null;
    const modalCloseOkBtn = disclaimerModal ? disclaimerModal.querySelector('.btn-close-modal') : null;

    const showModal = (e) => { if (e) e.preventDefault(); if (disclaimerModal) { disclaimerModal.classList.add('active'); document.body.style.overflow = 'hidden'; } };
    const hideModal = () => { if (disclaimerModal) { disclaimerModal.classList.remove('active'); document.body.style.overflow = ''; } };

    if (disclaimerTrigger) disclaimerTrigger.addEventListener('click', showModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', hideModal);
    if (modalCloseOkBtn) modalCloseOkBtn.addEventListener('click', hideModal);
    if (disclaimerModal) disclaimerModal.addEventListener('click', (e) => { if (e.target === disclaimerModal) hideModal(); });

    // -------------------------------------------------------------
    // 12. WhatsApp Chat Tooltip Bubble (MISSING 9 fix)
    // -------------------------------------------------------------
    const waTooltip = document.getElementById('wa-tooltip');
    const waCloseBtn = document.getElementById('wa-tooltip-close');
    if (waTooltip) {
        // Show after 3 seconds
        setTimeout(() => {
            waTooltip.classList.add('visible');
        }, 3000);
        if (waCloseBtn) {
            waCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                waTooltip.classList.remove('visible');
            });
        }
    }

    // -------------------------------------------------------------
    // 13. Button Ripple Micro-interaction (MISSING 12 fix)
    // -------------------------------------------------------------
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.cssText = `
                width: ${size}px; height: ${size}px;
                left: ${e.clientX - rect.left - size / 2}px;
                top: ${e.clientY - rect.top - size / 2}px;
            `;
            this.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });

    // Magnetic effect on .btn-navy elements
    document.querySelectorAll('.btn-navy').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const maxPull = 6;
            this.style.transform = `translateY(-2px) translate(${Math.min(maxPull, x * 0.25)}px, ${Math.min(maxPull, y * 0.25)}px)`;
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // -------------------------------------------------------------
    // 14. Interactive Calculators
    // -------------------------------------------------------------
    // GST Calculator
    const gstForm = document.getElementById('gst-calc-form');
    if (gstForm) {
        gstForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = parseFloat(document.getElementById('gst-amount').value) || 0;
            const rate = parseFloat(document.getElementById('gst-rate').value) || 0;
            const type = document.getElementById('gst-type').value;
            let base, gst, total;
            if (type === 'exclusive') {
                base = amount; gst = (amount * rate) / 100; total = base + gst;
            } else {
                total = amount; base = (amount * 100) / (100 + rate); gst = total - base;
            }
            document.getElementById('gst-result-base').textContent = '₹' + base.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('gst-result-tax').textContent = '₹' + gst.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('gst-result-total').textContent = '₹' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('gst-result').classList.add('visible');
        });
    }

    // Income Tax Calculator
    const taxForm = document.getElementById('tax-calc-form');
    if (taxForm) {
        taxForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const income = parseFloat(document.getElementById('tax-income').value) || 0;
            const regime = document.getElementById('tax-regime').value;
            let tax = 0;
            if (regime === 'new') {
                if (income <= 300000) tax = 0;
                else if (income <= 700000) tax = (income - 300000) * 0.05;
                else if (income <= 1000000) tax = 20000 + (income - 700000) * 0.10;
                else if (income <= 1200000) tax = 50000 + (income - 1000000) * 0.15;
                else if (income <= 1500000) tax = 80000 + (income - 1200000) * 0.20;
                else tax = 140000 + (income - 1500000) * 0.30;
                if (income <= 700000) tax = Math.max(0, tax);
            } else {
                const deductions = parseFloat(document.getElementById('tax-deductions')?.value) || 0;
                const taxableIncome = Math.max(0, income - deductions - 50000);
                if (taxableIncome <= 250000) tax = 0;
                else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
                else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
                else tax = 112500 + (taxableIncome - 1000000) * 0.30;
                if (taxableIncome <= 500000) tax = 0;
            }
            const cess = tax * 0.04;
            const totalTax = tax + cess;
            document.getElementById('tax-result-tax').textContent = '₹' + tax.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('tax-result-cess').textContent = '₹' + cess.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('tax-result-total').textContent = '₹' + totalTax.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('tax-result').classList.add('visible');
        });
    }

    // Toggle deductions field for old regime
    const taxRegimeSelect = document.getElementById('tax-regime');
    const deductionsField = document.getElementById('deductions-field');
    if (taxRegimeSelect && deductionsField) {
        taxRegimeSelect.addEventListener('change', () => {
            deductionsField.style.display = taxRegimeSelect.value === 'old' ? 'block' : 'none';
        });
    }

    // TDS Calculator
    const tdsForm = document.getElementById('tds-calc-form');
    if (tdsForm) {
        tdsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const payment = parseFloat(document.getElementById('tds-payment').value) || 0;
            const rate = parseFloat(document.getElementById('tds-rate').value) || 0;
            const tds = (payment * rate) / 100;
            const net = payment - tds;
            document.getElementById('tds-result-tds').textContent = '₹' + tds.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('tds-result-net').textContent = '₹' + net.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            document.getElementById('tds-result').classList.add('visible');
        });
    }

    // -------------------------------------------------------------
    // 15. Bulletin / Blog Filter Tabs (with Hash-Routing)
    // -------------------------------------------------------------
    document.querySelectorAll('[data-filter-group]').forEach(filterGroup => {
        const groupName = filterGroup.getAttribute('data-filter-group');
        const tabs = filterGroup.querySelectorAll('.filter-tab');
        const targetGrid = document.querySelector(`[data-filter-target="${groupName}"]`);
        if (!targetGrid) return;
        const items = targetGrid.querySelectorAll('[data-category]');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const filter = tab.getAttribute('data-filter');
                items.forEach(item => {
                    item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? '' : 'none';
                });
            });
        });

        const handleHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const matchingTab = filterGroup.querySelector(`.filter-tab[data-filter="${hash}"]`);
                if (matchingTab) {
                    matchingTab.click();
                    setTimeout(() => matchingTab.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                }
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
    });

    // -------------------------------------------------------------
    // 16. Utility Tab Switcher (with Hash-Routing)
    // -------------------------------------------------------------
    const utilityTabs = document.querySelectorAll('.utilities-tabs .filter-tab');
    const utilitySections = document.querySelectorAll('.utility-section');
    if (utilityTabs.length > 0) {
        utilityTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                utilityTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const target = tab.getAttribute('data-target');
                utilitySections.forEach(s => s.classList.toggle('active', s.id === target));
            });
        });

        const handleHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const matchingTab = document.querySelector(`.utilities-tabs .filter-tab[data-target="${hash}"]`);
                if (matchingTab) {
                    matchingTab.click();
                    setTimeout(() => matchingTab.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                }
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
    }

    // -------------------------------------------------------------
    // 17. Job Listing Accordion (Careers page)
    // -------------------------------------------------------------
    document.querySelectorAll('.job-card-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.job-card');
            const isOpen = card.classList.contains('open');
            document.querySelectorAll('.job-card').forEach(c => c.classList.remove('open'));
            if (!isOpen) card.classList.add('open');
        });
    });

    // -------------------------------------------------------------
    // 18. Events Filter
    // -------------------------------------------------------------
    const eventsFilterBtns = document.querySelectorAll('.events-filter .filter-tab');
    const eventCards = document.querySelectorAll('.event-card');
    if (eventsFilterBtns.length > 0) {
        eventsFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                eventsFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                eventCards.forEach(card => {
                    card.style.display = (filter === 'all' || card.getAttribute('data-type') === filter) ? '' : 'none';
                });
            });
        });
    }

    // -------------------------------------------------------------
    // 19. Smooth anchor scrolling
    // -------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
