document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DYNAMIC HEADER NAVBAR ON SCROLL
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    // Trigger once on load in case page is loaded scrolled down
    handleNavbarScroll();


    /* ==========================================================================
       2. MOBILE MENU NAVIGATION (HAMBURGER TOGGLE)
       ========================================================================== */
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMobileMenu = () => {
        hamburgerToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when mobile menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    hamburgerToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on any navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburgerToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });


    /* ==========================================================================
       3. FAQ ACCORDION (INTERACTIVE SINGLE-OPEN COLLAPSE)
       ========================================================================== */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // If clicked item wasn't open, open it
            if (!isOpen) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });


    /* ==========================================================================
       4. SCROLL SPY (ACTIVE NAVBAR LINKS INTERSECTION OBSERVER)
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    
    const scrollSpyOptions = {
        root: null, // relative to document viewport
        rootMargin: '-20% 0px -60% 0px', // check when section is in central part of screen
        threshold: 0
    };

    const scrollSpyCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (activeLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(scrollSpyCallback, scrollSpyOptions);
    sections.forEach(section => observer.observe(section));


    /* ==========================================================================
       5. ACCESSIBILITY: ENSURE TOOLTIP WORKS WITH KEYBOARD FOCUS
       ========================================================================== */
    const stickyWhatsapp = document.getElementById('sticky-whatsapp');
    const tooltip = stickyWhatsapp.querySelector('.floating-tooltip');

    stickyWhatsapp.addEventListener('focus', () => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateX(0)';
    });

    stickyWhatsapp.addEventListener('blur', () => {
        tooltip.style.opacity = '';
        tooltip.style.transform = '';
    });
});
