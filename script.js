// Animation des barres de compétences
document.addEventListener('DOMContentLoaded', function() {
    // Carousel des projets
    const projectGrid = document.querySelector('.project-grid');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (projectGrid && prevButton && nextButton) {
        const cardWidth = document.querySelector('.project-card').offsetWidth + 32;

        function updateNavigationButtons() {
            const atStart = projectGrid.scrollLeft === 0;
            const atEnd = projectGrid.scrollLeft + projectGrid.offsetWidth >= projectGrid.scrollWidth;

            projectGrid.setAttribute('data-at-start', atStart);
            projectGrid.setAttribute('data-at-end', atEnd);
        }

        function scrollProjects(direction) {
            const scrollAmount = direction * cardWidth;
            projectGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        // Mise à jour initiale des boutons
        updateNavigationButtons();

        // Mise à jour lors du défilement
        projectGrid.addEventListener('scroll', updateNavigationButtons);

        prevButton.addEventListener('click', () => scrollProjects(-1));
        nextButton.addEventListener('click', () => scrollProjects(1));
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.progress').forEach((progress) => {
        observer.observe(progress);
    });
});

// Animation douce du défilement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});