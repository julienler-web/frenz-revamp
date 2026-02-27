/* ============================================================
   FRENZ SCHOOL — Gallery & School Page JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Gallery Slideshow ---- */
    const track = document.querySelector('.gallery-track');
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');

    if (track && slides.length) {
        let current = 0;
        const total = slides.length;

        function goToSlide(index) {
            current = (index + total) % total;
            track.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
            thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
        }

        if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(current - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(current + 1));
        dots.forEach((d, i) => d.addEventListener('click', () => goToSlide(i)));
        thumbs.forEach((t, i) => t.addEventListener('click', () => goToSlide(i)));

        // Auto-advance every 4s
        const autoPlay = setInterval(() => goToSlide(current + 1), 4000);
        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(autoPlay));

        // Initialize
        goToSlide(0);
    }

});
