const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split the content into lines and remove any empty lines
  const lines = data.trim().split('\n');
  if (lines.length === 0) return;

  // The first line is the header
  const header = lines.shift().split(',');
  const fieldIndex = header.indexOf('field');

  const students = {};
  let totalStudents = 0;

  // Process each student record
  for (const line of lines) {
    if (line.trim() === '') continue;
    const record = line.split(',');
    if (record.length < header.length) continue;

    totalStudents += 1;
    const field = record[fieldIndex];
    if (!students[field]) {
      students[field] = [];
    }
    // Assume the first column contains the first name
    students[field].push(record[0]);
  }

  console.log(`Number of students: ${totalStudents}`);

  // Output each field's student count and list of first names.
  // Iterating in sorted order of the field names.
  Object.keys(students).sort((a, b) => a.localeCompare(b)).forEach((field) => {
    console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
  });
}

module.exports = countStudents;
