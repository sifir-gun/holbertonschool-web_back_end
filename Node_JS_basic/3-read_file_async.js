const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split file content into lines and remove empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        resolve();
        return;
      }

      // The first line is the header
      const header = lines.shift().split(',');
      const fieldIndex = header.indexOf('field');

      let totalStudents = 0;
      const fields = {};

      lines.forEach((line) => {
        const record = line.split(',');
        if (record.length < header.length) return;
        totalStudents += 1;

        const field = record[fieldIndex];
        if (!fields[field]) {
          fields[field] = [];
        }
        // Assuming the first column is the first name
        fields[field].push(record[0]);
      });

      console.log(`Number of students: ${totalStudents}`);
      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
      resolve();
    });
  });
}

module.exports = countStudents;
