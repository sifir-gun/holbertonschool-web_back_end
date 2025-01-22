const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const database = req.app.get('database');
    readDatabase(database)
      .then((data) => {
        let responseText = "This is the list of our students\n";
        // Tri des fields de manière insensible à la casse
        const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        fields.forEach((field) => {
          responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const database = req.app.get('database');
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send("Major parameter must be CS or SWE");
      return;
    }
    readDatabase(database)
      .then((data) => {
        const list = data[major] ? data[major].join(', ') : '';
        res.status(200).send(`List: ${list}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
