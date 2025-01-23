// 1-stdin.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Affiche le message de bienvenue avec un saut de ligne
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Affiche le nom de l'utilisateur avec un saut de ligne
  process.stdout.write(`Your name is: ${name}\n`);
  rl.close();
});

// Lors de la fermeture de l'interface readline
rl.on('close', () => {
  // Vérifie si l'entrée n'est pas en mode TTY (piped)
  if (!process.stdin.isTTY) {
    // Affiche le message de fermeture avec un saut de ligne
    process.stdout.write('This important software is now closing\n');
  }
});
