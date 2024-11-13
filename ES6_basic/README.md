# ES6 Basics

## Project Overview

This project introduces you to the fundamentals of ECMAScript 6 (ES6), also known as ECMAScript 2015, which is a significant update to JavaScript that includes new features to make code more efficient and easier to read. Through practical exercises, you'll learn about the new syntaxes and functionalities that ES6 introduces, and how they can improve JavaScript development.

## Learning Objectives

By the end of this project, you should be able to:
- Explain the purpose and significance of ES6 in JavaScript.
- Describe the new features introduced with ES6.
- Differentiate between constants (`const`) and variables (`let` and `var`).
- Understand block-scoped variables and their impact on code structure.
- Use arrow functions and default parameters for better readability and functionality.
- Utilize rest and spread parameters to manage variable-length arguments and merge data.
- Implement string templating with template literals for cleaner string manipulation.
- Create and handle objects with new ES6 syntax for properties and methods.
- Work with iterators and `for...of` loops to iterate over iterable data structures efficiently.

## Requirements

- **Platform**: Ubuntu 20.04 LTS with Node.js 20.x.x and npm 9.x.x.
- **Editors**: vi, vim, emacs, or Visual Studio Code.
- **File Structure**:
  - All files should end with a new line.
  - JavaScript files should use the `.js` extension.
  - A `README.md` file in the project root directory is mandatory.
- **Testing and Linting**:
  - Code should be tested using Jest and analyzed with ESLint (specific ESLint rules will be provided).

## Setup

### Install Node.js 20.x.x

1. In your home directory, run the following commands:
   ```bash
   curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify the installation:
   ```bash
   nodejs -v   # Should output v20.15.1
   npm -v      # Should output 10.7.0
   ```

### Install Jest, Babel, and ESLint

In your project directory, install the following dependencies:

- Jest:
  ```bash
  npm install --save-dev jest
  ```
- Babel:
  ```bash
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```
- ESLint:
  ```bash
  npm install --save-dev eslint
  ```

### Configuration Files

1. **package.json**:
   Add the following script configurations to `package.json`:

   ```json
   {
     "scripts": {
       "lint": "./node_modules/.bin/eslint",
       "check-lint": "lint [0-9]*.js",
       "dev": "npx babel-node",
       "test": "jest",
       "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
     },
     "devDependencies": {
       "@babel/core": "^7.6.0",
       "@babel/node": "^7.8.0",
       "@babel/preset-env": "^7.6.0",
       "eslint": "^6.8.0",
       "eslint-config-airbnb-base": "^14.0.0",
       "eslint-plugin-import": "^2.18.2",
       "eslint-plugin-jest": "^22.17.0",
       "jest": "^24.9.0"
     }
   }
   ```

2. **babel.config.js**:
   Configure Babel with the following setup:

   ```javascript
   module.exports = {
     presets: [
       [
         '@babel/preset-env',
         {
           targets: {
             node: 'current',
           },
         },
       ],
     ],
   };
   ```

3. **.eslintrc.js**:
   Configure ESLint rules:

   ```javascript
   module.exports = {
     env: {
       browser: false,
       es6: true,
       jest: true,
     },
     extends: [
       'airbnb-base',
       'plugin:jest/all',
     ],
     globals: {
       Atomics: 'readonly',
       SharedArrayBuffer: 'readonly',
     },
     parserOptions: {
       ecmaVersion: 2018,
       sourceType: 'module',
     },
     plugins: ['jest'],
     rules: {
       'no-console': 'off',
       'no-shadow': 'off',
       'no-restricted-syntax': [
         'error',
         'LabeledStatement',
         'WithStatement',
       ],
     },
     overrides: [
       {
         files: ['*.js'],
         excludedFiles: 'babel.config.js',
       },
     ],
   };
   ```

4. **Install dependencies**:
   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

   Note: Do not push the `node_modules` folder to your repository.

## Key Concepts and Tasks

### Key Topics

- **Constants and Variables**:
  - Understand `const`, `let`, and `var`, and how block-scoped variables work in ES6.
- **Arrow Functions**:
  - Simplify function syntax with arrow functions for more concise code.
- **Default Parameters**:
  - Set default values for function parameters, enabling more robust function handling.
- **Rest and Spread Syntax**:
  - Use rest syntax (`...`) for handling variable-length arguments.
  - Use spread syntax for merging arrays or spreading object properties.
- **Template Literals**:
  - Replace string concatenation with template literals for better readability.
- **Object Properties**:
  - Use shorthand syntax for object properties and methods to reduce code complexity.
- **Iterators and Loops**:
  - Use `for...of` loops and iterators to simplify iteration over collections.

### Tasks

1. **Const or let?**
   - Use `const` and `let` to declare variables with appropriate scope and immutability.
2. **Block Scope**
   - Prevent variable overwriting by using block-scoped declarations.
3. **Arrow Functions**
   - Rewrite functions with arrow syntax to streamline code.
4. **Parameter Defaults**
   - Use default values for function parameters to condense logic.
5. **Spread Syntax**
   - Use spread syntax to combine arrays and characters into a single array.
6. **Template Literals**
   - Use template literals to insert variables into strings.
7. **Object Property Shorthand**
   - Utilize shorthand syntax when the key and variable name are the same.
8. **Computed Property Names**
   - Use dynamic keys with computed property names in objects.
9. **Method Properties**
   - Use ES6 method properties for defining object methods concisely.
10. **For…of Loops**
    - Use `for...of` to iterate over arrays efficiently.
11. **Iterators**
    - Create functions that return objects structured using iterators.
12. **Report Object**
    - Build and return an object using prior functions, with a method to count departments.

## Additional Resources

- [ECMAScript 6 - ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest Parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## Conclusion

This project provides a comprehensive introduction to ES6 syntax and features, equipping you with modern JavaScript skills to write efficient, readable, and maintainable code. By mastering these ES6 essentials, you're well-prepared to develop advanced JavaScript applications.
