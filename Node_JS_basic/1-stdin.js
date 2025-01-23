// 1-stdin.js

// Affiche le message de bienvenue
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Variable pour stocker le nom de l'utilisateur
let name = '';

// Écoute de l'événement 'data' pour capturer l'entrée de l'utilisateur
process.stdin.on('data', (data) => {
  name += data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Écoute de l'événement 'end' pour détecter la fin de l'entrée
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
