// scripts.js

// Récupère toutes les sections et les liens du menu
const sections = document.querySelectorAll('main > section');
const menuLinks = document.querySelectorAll('#menu a');

// Fonction pour afficher une section et cacher les autres
function afficherSection(sectionId) {
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove('hidden'); // Affiche la section
    } else {
      section.classList.add('hidden'); // Cache les autres
    }
  });
}

// Ajoute un gestionnaire d'événements à chaque lien de menu
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    const sectionId = e.target.getAttribute('data-section'); // Récupère l'ID de la section à afficher
    afficherSection(sectionId);
  });
});

// Cache toutes les sections sauf l'accueil au chargement
window.addEventListener('DOMContentLoaded', () => {
  afficherSection('accueil');
});
