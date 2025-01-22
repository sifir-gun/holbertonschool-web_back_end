const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for their name
rl.question("Welcome to Holberton School, what is your name?\n", (name) => {
  console.log(`Your name is: ${name}`);
  // If running in interactive mode, the input stream will remain open until the user ends it.
  // For piped input, the stream will close immediately after the data is consumed.
  rl.close();
});

// When the input stream ends, display the closing message.
rl.on('close', () => {
  // Only display the closing message if input is being piped.
  // In interactive mode the user might not end the input (with ctrl+D), so the closing message
  // will only appear when the stream is closed.
  if (!process.stdin.isTTY) {
    console.log("This important software is now closing");
  }
});
