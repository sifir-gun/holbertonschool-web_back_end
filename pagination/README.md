# Pagination Project

## Description

This project focuses on implementing pagination techniques for a given dataset. The dataset used is a CSV file containing popular baby names and their attributes. Through the tasks, you will learn how to implement simple pagination, hypermedia pagination, and deletion-resilient pagination in Python.

## Learning Objectives

By the end of this project, you should be able to:

- Understand how to paginate a dataset using simple page and page_size parameters.
- Implement hypermedia pagination to provide additional metadata that aids clients in navigating through paginated results.
- Ensure pagination behavior is resilient to deletions within the dataset, maintaining a consistent navigation experience.

## Requirements

- All code will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9).
- All files should end with a new line.
- The first line of all Python files should be exactly `#!/usr/bin/env python3`.
- A `README.md` file at the root of the project folder is mandatory.
- Your code should follow `pycodestyle` style (version `2.5.*`).
- The length of your files will be tested using `wc`.
- All modules should have a documentation (docstring) explaining their purpose.
- All functions should have a documentation (docstring) explaining their purpose.
- Each docstring should be a clear, complete sentence.
- All functions and coroutines must be type-annotated.

## Setup

Use the provided `Popular_Baby_Names.csv` file as your dataset. You will be reading from this file in your pagination logic.

## Tasks

### 0. Simple helper function

- Implement a function `index_range(page, page_size)` that returns a tuple `(start_index, end_index)` representing the range of indexes to return in a list for those pagination parameters.
- Page numbers are 1-indexed.

### 1. Simple pagination

- Implement a `Server` class to paginate the dataset of popular baby names.
- Add a `get_page(page=1, page_size=10)` method that returns a list of rows corresponding to the requested page and page size.
- Use `assert` to validate `page` and `page_size`.
- Use `index_range` to determine the correct slice.
- If the requested page is out of range, return an empty list.

### 2. Hypermedia pagination

- Add a `get_hyper(page=1, page_size=10)` method that returns a dictionary with pagination metadata:
  - `page_size`, `page`, `data`, `next_page`, `prev_page`, and `total_pages`.
- Use the `get_page` method to retrieve data.
- Calculate `total_pages` using `math.ceil`.
- Determine the values for `next_page` and `prev_page`.

### 3. Deletion-resilient hypermedia pagination

- Implement a `get_hyper_index(index=None, page_size=10)` method that returns a dictionary with keys:
  - `index`, `data`, `page_size`, `next_index`.
- Ensure that if rows are removed between queries, the user does not skip items.
- Use `assert` to ensure `index` is within a valid range.
- Return the items starting from `index` for the given `page_size`, adjusting for any missing entries.

## Testing

Use the provided main files (e.g., `0-main.py`, `1-main.py`, `2-main.py`, `3-main.py`) to test your implementation.

For example:

```bash
./0-main.py
./1-main.py
./2-main.py
./3-main.py


## Author

**Guney TASDELEN**
