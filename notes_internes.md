En-tête de chaque page - Menu
  Après cette section il va y avoir la balise <main>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="images/favicon.png" type="image/png">
    <title>Accueil</title>
    <link rel="stylesheet" href="css/style_php.css">
</head>
<body>
    <header>
        <nav class="top-nav" aria-label="Menu principal">
            <div class="menu">
                <a href="../../index.html">Accueil</a>
                <a href="../php/index.html">PHP</a>
                <a href="../html/index.html">HTML</a>
                <a href="../css/index.html">CSS</a>
            </div>
        </nav>
    </header>
</body>
</html>
--------------------------------------------------------------------------------
En-tête de chaque page - Side bar

--------------------------------------------------------------------------------
Footer
  Après la balise </body>
  <footer>
    <p>&copy; <span id="year"></span> Copyright à Caroline Richard, Amélie Hénault et Bobby Brien-Laporte ©.</p>
  </footer>
  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
--------------------------------------------------------------------------------
Mise en page pour les pages de la Side bar
  Les catégories (boucles, fonctions, etc) : En H1
  Les sous-titres (foreach, if, etc) : En H2, en gras et couleur #4cd3f5
