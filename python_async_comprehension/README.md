# Python Async Comprehension

This project explores the concepts of asynchronous generators and comprehensions in Python, as introduced in Python 3.6+ and enhanced in PEP 530. The main goals of this project are to understand:

- How to write an asynchronous generator.
- How to use async comprehensions to collect values from asynchronous iterators.
- How to properly type-annotate generators and asynchronous code.

## Requirements

- **Python Version**: 3.9
- **Code Format**: Follow `pycodestyle` guidelines (version 2.5.x).
- Each file should have a proper module-level docstring.
- Each function and coroutine should have a docstring.
- All functions and coroutines must be type-annotated.
- The project files should be placed in the `holbertonschool-web_back_end/python_async_comprehension` directory.

## Learning Objectives

By the end of this project, you should be able to:

1. Write an asynchronous generator that uses `asyncio.sleep` and yields values.
2. Utilize async comprehensions to gather values produced by an async generator.
3. Type-annotate asynchronous functions, generators, and comprehensions.
4. Understand how running multiple async comprehensions in parallel affects execution time.

## Project Structure

- **0-async_generator.py**:
  Contains `async_generator` – a coroutine that loops 10 times, each time:
  - Asynchronously waits for 1 second.
  - Yields a random number between 0 and 10.

- **1-async_comprehension.py**:
  Contains `async_comprehension` – a coroutine that:
  - Uses async comprehension to collect 10 values from `async_generator`.
  - Returns the collected list of 10 random numbers.

- **2-measure_runtime.py**:
  Contains `measure_runtime` – a coroutine that:
  - Executes `async_comprehension` four times in parallel using `asyncio.gather`.
  - Measures and returns the total runtime.
  - Demonstrates that performing these tasks in parallel still takes roughly the same time as a single execution due to the async nature of the code.

## Testing

- **0-main.py**, **1-main.py**, **2-main.py** (provided in the instructions):
  These files can be used to test the corresponding tasks by running:
  ```bash
  ./0-main.py
  ./1-main.py
  ./2-main.py

## Testing

- **Guney TASDELEN**
