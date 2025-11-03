/* ==================== MOSTRAR MENU MOBILE ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

/* Mostrar menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

/* Fechar menu ao clicar em um link */
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(link => link.addEventListener('click', linkAction));