# ES6 Classes

## Learning Objectives
- Define Classes
- Add methods to classes
- Add static methods to classes
- Class inheritance 
- Metaprogramming and symbols

## Requirements
- Node.js 20.x.x and npm 9.x.x
- Ubuntu 20.04 LTS
- ESLint configuration
- Jest for testing

## Setup Instructions

### Install Node.js 20.x.x
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Verify Installation
```bash
nodejs -v  # v20.15.1
npm -v     # 10.7.0
```

### Install Dependencies
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

## Tasks

### 0. ClassRoom
Implement `ClassRoom` class with `maxStudentsSize` attribute.

### 1. Initialize Classrooms 
Create function returning array of 3 ClassRoom objects.

### 2. HolbertonCourse
Implement class with name, length, students attributes and getters/setters.

### 3. Currency
Implement class with code, name attributes and displayFullCurrency method.

### 4. Pricing
Create class with amount, currency attributes and conversion methods.

### 5. Building
Create abstract class with sqft attribute and evacuationWarningMessage method.

### 6. SkyHighBuilding
Extend Building class with floors attribute.

### 7. Airport
Create class with custom string representation.

### 8. HolbertonClass
Implement class with Number and String casting.

### 9. Fix Hoisting
Fix code organization issues.

### 10. Car
Implement class with cloning capabilities using Symbols.

## Configuration Files
- package.json
- babel.config.js  
- .eslintrc.js

