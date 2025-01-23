const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for their name
rl.question('Welcome to Holberton School, what is your name? ', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

// When the input stream ends, display the closing message.
rl.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
