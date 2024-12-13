# NoSQL - MongoDB and Python

## **Description**
This project focuses on understanding and utilizing NoSQL databases, specifically MongoDB, and integrating them with Python. You will learn the basics of NoSQL databases, how they differ from SQL databases, and how to interact with MongoDB both via its shell and the PyMongo library.

---

## **Learning Objectives**
By the end of this project, you will be able to:

- Explain what NoSQL means.
- Differentiate between SQL and NoSQL databases.
- Define ACID properties.
- Describe what document storage is.
- Identify different types of NoSQL databases.
- List the benefits of NoSQL databases.
- Query information from a NoSQL database.
- Insert, update, and delete information from a NoSQL database.
- Use MongoDB with Python.

---

## **Resources**
Read or watch:

- [NoSQL Databases Explained](https://example.com/nosql-explained)
- [What is NoSQL?](https://example.com/what-is-nosql)
- [MongoDB with Python Crash Course - Tutorial for Beginners](https://example.com/mongodb-python-tutorial)
- [MongoDB Tutorial 2: Insert, Update, Remove, Query](https://example.com/mongodb-tutorial)
- [Aggregation in MongoDB](https://example.com/mongodb-aggregation)
- [Introduction to MongoDB and Python](https://example.com/mongodb-intro)
- [mongo Shell Methods](https://example.com/mongo-shell-methods)
- [The mongo Shell](https://example.com/mongo-shell)

---

## **Requirements**

### **MongoDB Command Files**
- Files will be interpreted/compiled on **Ubuntu 20.04 LTS** using MongoDB (version 4.4).
- All files must end with a new line.
- The first line of each file must be a comment: `// my comment`.
- A `README.md` file is mandatory.
- File length will be tested using `wc`.

### **Python Scripts**
- Scripts will be interpreted/compiled on **Ubuntu 20.04 LTS** using Python 3.9 and PyMongo 4.8.0.
- All files must end with a new line.
- The first line of each script must be: `#!/usr/bin/env python3`.
- Your code must follow the **pycodestyle** style guide (version 2.5.*).
- Modules must include documentation (e.g., `print(__import__("module").__doc__)`).
- Functions must include documentation (e.g., `print(__import__("module").function.__doc__)`).
- Code should not execute when imported (use `if __name__ == "__main__":`).

---

## **Tasks**

### **0. List all databases**
Write a script that lists all databases in MongoDB.

- **File:** `0-list_databases`
- **Example:**
  ```bash
  guillaume@ubuntu:~/$ cat 0-list_databases | mongo
  MongoDB shell version v3.6.3
  connecting to: mongodb://127.0.0.1:27017
  MongoDB server version: 3.6.3
  admin        0.000GB
  config       0.000GB
  local        0.000GB
  logs         0.005GB
  bye
