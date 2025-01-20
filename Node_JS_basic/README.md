# Node_JS_Basics

This project is designed to help you get started with running JavaScript on the server side using Node.js, while learning to use various modules and concepts essential for modern web application development. By the end of this project, you should be able to:

- Run JavaScript using NodeJS
- Use NodeJS modules
- Work with specific NodeJS modules to read files
- Use the `process` object to access command line arguments and environment variables
- Create a small HTTP server using NodeJS
- Create an HTTP server using ExpressJS
- Create advanced routes with ExpressJS
- Use ES6 features with NodeJS via Babel-node
- Use Nodemon to develop more efficiently

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
  - [0. Executing basic JavaScript with NodeJS](#0-executing-basic-javascript-with-nodejs)
  - [1. Using Process stdin](#1-using-process-stdin)
  - [2. Reading a file synchronously with NodeJS](#2-reading-a-file-synchronously-with-nodejs)
  - [3. Reading a file asynchronously with NodeJS](#3-reading-a-file-asynchronously-with-nodejs)
  - [4. Creating a basic HTTP server using Node's HTTP module](#4-creating-a-basic-http-server-using-nodes-http-module)
  - [5. Creating a more complex HTTP server using Node's HTTP module](#5-creating-a-more-complex-http-server-using-nodes-http-module)
  - [6. Creating an HTTP server using Express](#6-creating-an-http-server-using-express)
  - [7. Creating a more complex HTTP server using Express](#7-creating-a-more-complex-http-server-using-express)
  - [8. Organizing a complex HTTP server using Express](#8-organizing-a-complex-http-server-using-express)
- [NPM Scripts](#npm-scripts)
- [License](#license)
- [Resources](#resources)

---

## Prerequisites

- **Node.js** version 20.x.x (recommended on Ubuntu 20.04 LTS)
- A text editor (e.g., [Visual Studio Code](https://code.visualstudio.com/), vim, emacs, etc.)
- [npm](https://www.npmjs.com/) (installed with NodeJS)

---

## Installation

1. **Clone the GitHub repository:**

   ```bash
   git clone https://github.com/holbertonschool-web_back_end/Node_JS_basic.git
   cd Node_JS_basic
   ```


2.	**Install dependencies:**

	```bash
	npm install
	```

## Project Structure

The project is organized as follows:

.
├── 0-console.js           # Executes a basic message display in the console
├── 1-stdin.js             # Reads input from standard input (stdin)
├── 2-read_file.js         # Reads a CSV file synchronously
├── 3-read_file_async.js   # Reads a CSV file asynchronously
├── 4-http.js              # Basic HTTP server using Node's http module
├── 5-http.js              # Advanced HTTP server using Node's http module
├── 6-http_express.js      # Basic HTTP server using Express
├── 7-http_express.js      # Advanced HTTP server using Express with detailed routing
├── full_server            # A full Express server organized following the MVC pattern
│   ├── controllers
│   │   ├── AppController.js
│   │   └── StudentsController.js
│   ├── routes
│   │   └── index.js
│   ├── server.js
│   └── utils.js           # Utility function to read the database asynchronously
├── database.csv           # CSV file database
├── package.json
├── babel.config.js
└── .eslintrc.js

## Features

### 0. Executing basic JavaScript with NodeJS

- **File:** `0-console.js`
- **Description:** Contains a function `displayMessage` that prints the provided string to STDOUT.

> **Example:**
> ```javascript
> // 0-main.js
> const displayMessage = require('./0-console');
> 
> displayMessage("Hello NodeJS!");
> ```
>
> Running `node 0-main.js` will output:
> ```
> Hello NodeJS!
> ```

---

### 1. Using Process stdin

- **File:** `1-stdin.js`
- **Description:** Asks the user for their name via the command line, then prints the user’s name along with a closing message.
- **Behavior:**
  - Prompts: "Welcome to Holberton School, what is your name?"
  - After input, outputs: "Your name is: INPUT"
  - On exit, outputs: "This important software is now closing"

> **Example:**
> ```bash
> node 1-stdin.js
> Welcome to Holberton School, what is your name?
> Alice
> Your name is: Alice
> This important software is now closing
> ```

---

### 2. Reading a file synchronously with NodeJS

- **File:** `2-read_file.js`
- **Description:** Contains the `countStudents` function that reads the `database.csv` file synchronously.
- **Behavior:**
  - Outputs the total number of students.
  - Outputs the number of students per field along with a list of first names.
  - If the file cannot be read, throws an error with the message: "Cannot load the database".

---

### 3. Reading a file asynchronously with NodeJS

- **File:** `3-read_file_async.js`
- **Description:** Similar to task 2 but uses asynchronous file reading and returns a Promise.
- **Behavior:**
  - Outputs detailed information about the number of students and their fields.
  - If the file cannot be read, the Promise is rejected with the error message: "Cannot load the database".

---

### 4. Creating a basic HTTP server using Node's HTTP module

- **File:** `4-http.js`
- **Description:** Uses Node's `http` module to create a simple HTTP server.
- **Behavior:**
  - **Port:** 1245
  - **Response:** Returns "Hello Holberton School!" for any endpoint accessed.

> **Example:**
> ```bash
> curl localhost:1245 && echo ""
> Hello Holberton School!
> ```

---

### 5. Creating a more complex HTTP server using Node's HTTP module

- **File:** `5-http.js`
- **Description:** Extends task 4 by adding multiple routes:
  - **Route "/"**: Returns "Hello Holberton School!"
  - **Route "/students"**: Displays student details similar to the asynchronous file reading version.
- **Requirement:** The CSV file is passed as an argument to the file.

> **Example:**
> ```bash
> curl localhost:1245/students && echo ""
> This is the list of our students
> Number of students: 10
> Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
> Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
> ```

---

### 6. Creating an HTTP server using Express

- **File:** `6-http_express.js`
- **Description:** Builds a basic HTTP server using the Express framework.
- **Behavior:**
  - **Port:** 1245
  - **Route "/"**: Returns "Hello Holberton School!".
  - Non-existent routes display Express's default error page.

> **Example:**
> ```bash
> curl localhost:1245 && echo ""
> Hello Holberton School!
> ```

---

### 7. Creating a more complex HTTP server using Express

- **File:** `7-http_express.js`
- **Description:** Enhances the basic Express server by adding:
  - **Route "/"**: Returns "Hello Holberton School!".
  - **Route "/students"**: Returns a detailed list of students, similar to task 3, using the CSV file passed as an argument.

> **Example:**
> ```bash
> curl localhost:1245/students && echo ""
> This is the list of our students
> Number of students: 10
> Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
> Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
> ```

---

### 8. Organizing a complex HTTP server using Express

- **Directory:** `full_server`
- **Description:** Contains a complete Express server structured in an MVC-like architecture.

  **Components:**
  
  - **Utils:**  
    - `full_server/utils.js`: Contains the `readDatabase` function that reads the CSV file asynchronously and returns a Promise. If the file is not accessible, the Promise is rejected with an appropriate error.
  
  - **Controllers:**  
    - `full_server/controllers/AppController.js`: Contains a class `AppController` with a static method `getHomepage` that returns "Hello Holberton School!".
    - `full_server/controllers/StudentsController.js`: Contains a class `StudentsController` with:
      - `getAllStudents`: Returns the full list of students grouped by their field along with counts.
      - `getAllStudentsByMajor`: Returns a list of student first names filtered by the `major` parameter (only accepts "CS" or "SWE"). If an unsupported major is provided, returns a 500 error with the message: "Major parameter must be CS or SWE".
  
  - **Routes:**  
    - `full_server/routes/index.js`: Connects routes to their corresponding controller methods.
  
  - **Server:**  
    - `full_server/server.js`: Creates an Express server that listens on port 1245 and uses the routes defined above.

  **Usage:**
  
  The CSV file name is passed as an argument to `server.js` at startup. For testing purposes, ensure the file is correctly provided when running the server.
  Example:	Then test with:

NPM Scripts

The following scripts are available in the package.json:
	•	Linting:
	•	npm run lint or npm run check-lint
	•	Testing:
	•	npm run test (tests are executed using Mocha with Babel)
	•	Development:
	•	npm run dev launches Nodemon with Babel-node for hot-reloading during development


## Resources

- [Node JS Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API Documentation](https://nodejs.org/api/process.html)
- [Child Process Documentation](https://nodejs.org/api/child_process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)

