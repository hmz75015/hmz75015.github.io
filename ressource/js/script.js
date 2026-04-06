// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if(activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// Initialiser le lien actif au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Activer le premier lien (Accueil) par défaut
    const homeLink = document.querySelector('header nav a[href*="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// Gestion du smooth scroll et mise à jour des liens actifs lors du clic
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Supprimer la classe active de tous les liens
        document.querySelectorAll('header nav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        // Ajouter la classe active au lien cliqué
        link.classList.add('active');
    });
});


