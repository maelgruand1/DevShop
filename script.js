// scripts.js

// Récupère toutes les sections et les liens du menu
const sections = document.querySelectorAll('main > section');
const menuLinks = document.querySelectorAll('#menu a');

// Fonction pour cacher toutes les sections
function cacherToutesLesSections() {
  sections.forEach((section) => {
    section.classList.add('hidden'); // Ajoute la classe hidden pour cacher
  });
}

// Fonction pour afficher une seule section
function afficherSection(sectionId) {
  cacherToutesLesSections(); // Cache toutes les sections
  const section = document.getElementById(sectionId); // Récupère la section par son ID
  if (section) {
    section.classList.remove('hidden'); // Retire la classe hidden pour afficher
  }
}

// Ajout d'événements sur chaque lien du menu
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const sectionId = link.getAttribute('data-section'); // Récupère la valeur de data-section
    afficherSection(sectionId); // Affiche la section correspondante
  });
});

// Au chargement de la page, affiche uniquement la section "Accueil"
window.addEventListener('DOMContentLoaded', () => {
  cacherToutesLesSections(); // Cache tout
  afficherSection('accueil'); // Affiche l'accueil
});
