window.onload = function() {
    // Accueil de PHP
    const mesPages = [ // Nom de chaque page
        { texte: "Symboles", fichier: "index.html" },
        { texte: "if else", fichier: "if-else.html" },
        { texte: "Boucles", fichier: "boucles.html" },
        { texte: "Condition switch-case", fichier: "switch-case.html" },
        { texte: "Booléen", fichier: "boolean.html" }
    ]; 

    const menu = document.getElementById('menu-sidebar');

    if (menu) {
        mesPages.forEach(page => {
            const lien = document.createElement('a');

            lien.href = page.fichier; // Le fichier servira de destination

            lien.textContent = page.texte; // Le texte servira d'affichage

            if (window.location.href.includes(page.fichier)) { // Permet de mettre une class pour la page active
                lien.classList.add('page-active');
            }

            menu.appendChild(lien);
        });
    }

    // Footer
    document.getElementById("year").textContent = new Date().getFullYear();
};