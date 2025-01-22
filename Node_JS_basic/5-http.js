const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    // Si l'URL est "/", on renvoie directement le message d'accueil.
    res.end("Hello Holberton School!");
  } else if (req.url === '/students') {
    // Si l'URL est "/students", on commence par envoyer la première ligne.
    let output = "This is the list of our students\n";
    // On appelle la fonction countStudents qui lit le fichier CSV de manière asynchrone.
    countStudents(database)
      .then((text) => {
        // Une fois la lecture terminée, on concatène le résultat au message d'en-tête.
        res.end(output + text);
      })
      .catch((error) => {
        // En cas d'erreur (fichier non trouvé, etc.), on renvoie le message d'erreur après l'en-tête.
        res.end(output + error.message);
      });
  } else {
    // Pour toutes les autres URL, on renvoie par défaut le message d'accueil.
    res.end("Hello Holberton School!");
  }
});

app.listen(1245);

module.exports = app;
