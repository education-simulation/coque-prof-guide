// ============================================================
//  site.config.js — menu du site-guide RASF
// ============================================================

window.SITE = {
  titre: "Atelier RASF · Ton site de cours",
  sousTitre: "Le pas-à-pas, du compte GitHub à ton site en ligne",
  auteur: "RASF",
  couleur: "#336fa3",
  accueil: "accueil",
  // Le guide n'est jamais un aperçu de Codespace : pas de bandeau ni de volet d'étapes.
  bandeauApercu: false,

  menu: [
    {
      rubrique: "Commencer",
      pages: [
        { id: "accueil", titre: "Par où commencer", fichier: "pages/accueil.md" },
      ],
    },
    {
      rubrique: "Les étapes",
      pages: [
        { id: "compte", titre: "1. Ton compte GitHub", fichier: "pages/01-compte-github.md" },
        { id: "education", titre: "2. GitHub Education (facultatif)", fichier: "pages/02-github-education.md" },
        { id: "copier", titre: "3. Copier le modèle", fichier: "pages/03-copier-le-modele.md" },
        { id: "atelier", titre: "4. Ouvrir ton atelier", fichier: "pages/04-ouvrir-atelier.md" },
        { id: "mistral", titre: "5. Brancher ton assistant", fichier: "pages/05-brancher-mistral.md" },
        { id: "bonjour", titre: "6. Dire bonjour", fichier: "pages/06-dire-bonjour.md" },
        { id: "enligne", titre: "7. Mettre en ligne", fichier: "pages/07-mettre-en-ligne.md" },
      ],
    },
    {
      rubrique: "En cas de souci",
      pages: [
        { id: "depannage", titre: "Que faire si…", fichier: "pages/depannage.md" },
        { id: "couts", titre: "Gratuit ? Jusqu'où ?", fichier: "pages/quotas-et-couts.md" },
      ],
    },
  ],
};
