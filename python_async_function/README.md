# Python Async Function

## Description

This project focuses on asynchronous programming in Python using the asyncio library. You'll learn how to write asynchronous code using async and await syntax, run concurrent coroutines, create tasks, and utilize the random module in an asynchronous context.

## Learning Objectives

By the end of this project, you should be able to explain:
* async and await syntax
* How to execute an async program with asyncio
* How to run concurrent coroutines
* How to create asyncio tasks
* How to use the random module in asynchronous code

## Requirements

### General
* Mandatory: A README.md file at the root of the project folder
* Editors allowed: vi, vim, emacs
* Interpreter: All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.9)
* File Endings: All your files should end with a new line
* Executable Files: All your files must be executable
* File Length: The length of your files will be tested using wc
* Shebang: The first line of all your files should be exactly `#!/usr/bin/env python3`
* Style Guidelines: Your code should use the pycodestyle style (version 2.5.x)
* Type Annotations: All your functions and coroutines must be type-annotated

### Documentation
* All your modules should have documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
* All your functions should have documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`)
* A documentation is not a simple word; it's a real sentence explaining the purpose of the module, class, or method (the length of it will be verified)

## Project Structure

```
holbertonschool-web_back_end/
└── python_async_function/
    ├── 0-basic_async_syntax.py
    ├── 1-concurrent_coroutines.py
    ├── 2-measure_runtime.py
    ├── 3-tasks.py
    ├── 4-tasks.py
    └── README.md
```

## Tasks

### 0. The basics of async
**File**: `0-basic_async_syntax.py`

Write an asynchronous coroutine called `wait_random` that takes in an integer argument `max_delay` (with a default value of 10). It waits for a random delay between 0 and max_delay (inclusive) seconds and eventually returns that delay.
* Use the random module.

Example Usage:
```python
#!/usr/bin/env python3

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random

print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(5)))
print(asyncio.run(wait_random(15)))
```

### 1. Let's execute multiple coroutines at the same time with async
**File**: `1-concurrent_coroutines.py`

Import `wait_random` from the previous python file and write an async routine called `wait_n` that takes in two integer arguments (in this order): `n` and `max_delay`. You will spawn `wait_random` n times with the specified max_delay.
* wait_n should return the list of all the delays (float values)
* The list of the delays should be in ascending order without using sort() because of concurrency

Example Usage:
```python
#!/usr/bin/env python3

import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n

print(asyncio.run(wait_n(5, 5)))
print(asyncio.run(wait_n(10, 7)))
print(asyncio.run(wait_n(10, 0)))
```

### 2. Measure the runtime
**File**: `2-measure_runtime.py`

From the previous file, import `wait_n` into `2-measure_runtime.py`.

Create a `measure_time` function with integers `n` and `max_delay` as arguments that measures the total execution time for `wait_n(n, max_delay)`, and returns `total_time / n`. Your function should return a float.
* Use the time module to measure an approximate elapsed time.

Example Usage:
```python
#!/usr/bin/env python3

measure_time = __import__('2-measure_runtime').measure_time

n = 5
max_delay = 9

print(measure_time(n, max_delay))
```

### 3. Tasks
**File**: `3-tasks.py`

Import `wait_random` from `0-basic_async_syntax`.

Write a function (do not create an async function, use the regular function syntax to do this) called `task_wait_random` that takes an integer `max_delay` and returns an `asyncio.Task`.

Example Usage:
```python
#!/usr/bin/env python3

import asyncio

task_wait_random = __import__('3-tasks').task_wait_random

async def test(max_delay: int) -> float:
    task = task_wait_random(max_delay)
    await task
    print(task.__class__)

asyncio.run(test(5))
```

### 4. Tasks
**File**: `4-tasks.py`

Take the code from `wait_n` and alter it into a new function `task_wait_n`. The code is nearly identical to `wait_n` except that `task_wait_random` is being called.

Example Usage:
```python
#!/usr/bin/env python3

import asyncio

task_wait_n = __import__('4-tasks').task_wait_n

n = 5
max_delay = 6
print(asyncio.run(task_wait_n(n, max_delay)))
```

## Usage

* Ensure all your functions are properly type-annotated
* Run the example usage scripts to test your code
* Follow the style guidelines and include appropriate documentation

## Resources

* Async IO in Python: A Complete Walkthrough
* asyncio - Asynchronous I/O
* random.uniform

## Author

* Guney TASDELEN

