const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Traitement du CSV en retirant les lignes vides
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) {
        resolve({});
        return;
      }

      // La première ligne est l'en-tête
      const header = lines.shift().split(',');
      const fieldIndex = header.indexOf('field');

      const result = {};
      lines.forEach(line => {
        const record = line.split(',');
        if (record.length < header.length) return;
        const firstName = record[0];
        const field = record[fieldIndex];
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstName);
      });
      resolve(result);
    });
  });
}

module.exports = readDatabase;
