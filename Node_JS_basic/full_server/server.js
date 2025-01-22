const express = require('express');
const routes = require('./routes');

const app = express();

// Récupération du nom du fichier de base de données depuis les arguments d'exécution
// Par exemple : node full_server/server.js database.csv
const databaseFile = process.argv[2];
app.set('database', databaseFile);

// Utilisation des routes définies
app.use('/', routes);

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Pour ES6, vous pourriez utiliser "export default app;" 
// mais ici, en CommonJS, on utilise module.exports
module.exports = app;
