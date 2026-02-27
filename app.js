/* ============================================================
   FRENZ SCHOOL — Global JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Navbar scroll behaviour ---- */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        function updateNav() {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('transparent');
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.add('transparent');
            }
        }
        updateNav();
        window.addEventListener('scroll', updateNav, { passive: true });
    }

    /* ---- Mobile menu ---- */
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
    }
    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            if (hamburger) hamburger.classList.remove('open');
        });
    }
    // close on link click
    document.querySelectorAll('.mobile-menu a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            if (hamburger) hamburger.classList.remove('open');
        });
    });

    /* ---- Active nav link ---- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ---- Scroll fade-in animation ---- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-up').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        observer.observe(el);
    });

    /* ---- Testimonials carousel ---- */
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.testi-dot');
    if (track && dots.length) {
        let current = 0;
        const cards = track.querySelectorAll('.testi-card');
        const total = cards.length;

        function goTo(index) {
            current = (index + total) % total;
            const cardWidth = cards[0].offsetWidth + 24; // gap
            track.style.transform = `translateX(-${current * cardWidth}px)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
        }

        dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
        // auto-play
        setInterval(() => goTo(current + 1), 5000);
    }

    /* ---- Particle generator (hero) ---- */
    const particleContainer = document.querySelector('.hero-particles');
    if (particleContainer) {
        const colors = ['#F5A623', '#4A90D9', '#FF6B6B', '#FFFFFF'];
        for (let i = 0; i < 18; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 20 + 8;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.bottom = '-50px';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = (Math.random() * 20 + 12) + 's';
            p.style.animationDelay = (Math.random() * 10) + 's';
            particleContainer.appendChild(p);
        }
    }

    /* ---- Age tabs (programmes page) ---- */
    const ageTabs = document.querySelectorAll('.age-tab');
    const agePanels = document.querySelectorAll('.age-panel');
    ageTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            ageTabs.forEach(t => t.classList.remove('active'));
            agePanels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(tab.dataset.target);
            if (target) target.classList.add('active');
        });
    });

    /* ---- Contact form ---- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('[type="submit"]');
            btn.textContent = '✅ Message Sent!';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Send Message';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

    /* ---- Smooth number counter ---- */
    function animateCounter(el) {
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
        }, 30);
    }
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

});
