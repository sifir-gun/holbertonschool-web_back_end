# ES6 Promises Project

A project focused on JavaScript Promises, async/await, and error handling using ES6+ features.

## Learning Objectives

- Understanding Promises (how, why, and what)
- Using then, resolve, catch methods
- Working with Promise object methods
- Implementing Throw / Try
- Using async functions and await operator

## Requirements

- Ubuntu 20.04 LTS
- Node.js 20.x.x
- npm 9.x.x
- ESLint
- Jest for testing

## Setup

1. Install Node.js 20.x:
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Install project dependencies:
```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/cli eslint
```

## Project Structure

Key files:
- `utils.js`: Helper functions (uploadPhoto, createUser)
- `package.json`: Project configuration
- `babel.config.js`: Babel settings
- `.eslintrc.js`: ESLint configuration

## Tasks

0. Basic Promise implementation
1. Promise resolution/rejection based on boolean
2. Promise handlers with API response
3. Multiple Promise handling
4. User signup Promise
5. Promise rejection
6. Multiple Promise settlement
7. Load balancer implementation
8. Error handling with throw
9. Try/catch implementation

## Testing

Run tests:
```bash
npm run test
```

Check linting:
```bash
npm run lint
```

## Author
Guney Tasdelen
