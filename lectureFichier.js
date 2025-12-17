const fs = require('fs');

console.log("Reading file, please wait...");

fs.readFile('data.txt', 'utf8', (err, data) => {
  console.log("Contenu du fichier :", data);
});
