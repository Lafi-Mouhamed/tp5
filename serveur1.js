const http = require('http');
const fs = require('fs');

// Port du serveur
const PORT = 8080;

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  // Lecture du fichier message.txt
  fs.readFile('message.txt', 'utf8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Si erreur : message simple
    if (err) {
      res.end(`
        <html>
          <body>
            <h1>Erreur</h1>
            <p>Impossible de lire le fichier message.txt</p>
            <footer>Serveur Node.js</footer>
          </body>
        </html>
      `);
    } else {
      // Si fichier lu avec succès
      res.end(`
        <html>
          <head><title>Serveur Node.js</title></head>
          <body>
            <h1>Bonjour</h1>
            <p>${data}</p>
            <footer>Serveur Node.js – Exercice 3</footer>
          </body>
        </html>
      `);
    }
  });
});

// Démarrage du serveur
server.listen(PORT, () => {
  console.log(`✅ Serveur en écoute sur http://localhost:${PORT}`);
});
