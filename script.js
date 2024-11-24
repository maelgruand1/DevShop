//global
const pages = [index, moreAbout];
const index = "index.html";
const moreAbout = "moreAbout.html";

function moreAbout() {
  rediring = true;
  window.location.href = pages[1];
}
// Menu toggle pour mobiles
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Formulaire (exemple d'alerte)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Merci pour votre message ! Je vous répondrai rapidement.');
  form.reset();
});
