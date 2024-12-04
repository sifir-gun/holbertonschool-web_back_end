# Python Variable Annotations

## Description

This project focuses on learning and practicing type annotations in Python 3. Type annotations allow you to explicitly declare the type of variables, function parameters, and return values, which can improve code readability and help with debugging. The project covers how to add type annotations, understand duck typing, and validate code using mypy.

## Learning Objectives

By the end of this project, you should be able to explain:
* Type annotations in Python 3
* How to use type annotations to specify function signatures and variable types
* Duck typing
* How to validate your code with mypy

## Requirements

### General
* Allowed editors: vi, vim, emacs
* Interpreter: All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.9)
* File Endings: All your files should end with a new line
* Shebang: The first line of all your files should be exactly `#!/usr/bin/env python3`

### Documentation
* All your modules should have a documentation (python3 -c 'print(__import__("my_module").__doc__)')
* All your classes should have a documentation (python3 -c 'print(__import__("my_module").MyClass.__doc__)')
* All your functions (inside and outside a class) should have a documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)' and python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)')
* A documentation is not a simple word; it's a real sentence explaining the purpose of the module, class, or method

### Additional Requirements
* Style Guidelines: Your code should use the pycodestyle style (version 2.5)
* Executable Files: All your files must be executable
* File Length: The length of your files will be tested using wc
* Mandatory File: A README.md file, at the root of the folder of the project, is mandatory

## Installation

No special installation is required for this project beyond having Python 3.9 installed on Ubuntu 20.04 LTS.

## Project Structure

```
holbertonschool-web_back_end/
├── python_variable_annotations/
    ├── 0-add.py
    ├── 1-concat.py
    ├── 2-floor.py
    ├── 3-to_str.py
    ├── 4-define_variables.py
    ├── 5-sum_list.py
    ├── 6-sum_mixed_list.py
    ├── 7-to_kv.py
    ├── 8-make_multiplier.py
    ├── 9-element_length.py
    └── README.md
```

## Tasks

### 0. Basic annotations - add

Write a type-annotated function `add` that takes a float `a` and a float `b` as arguments and returns their sum as a float.
* File: `0-add.py`

```python
#!/usr/bin/env python3
"""
Module for add function
"""

def add(a: float, b: float) -> float:
    """Adds two floats and returns the result."""
    return a + b
```

### 1. Basic annotations - concat

Write a type-annotated function `concat` that takes a string `str1` and a string `str2` as arguments and returns a concatenated string.
* File: `1-concat.py`

```python
#!/usr/bin/env python3
"""
Module for concat function
"""

def concat(str1: str, str2: str) -> str:
    """Concatenates two strings."""
    return str1 + str2
```

### 2. Basic annotations - floor

Write a type-annotated function `floor` which takes a float `n` as argument and returns the floor of the float.
* File: `2-floor.py`

```python
#!/usr/bin/env python3
"""
Module for floor function
"""

import math

def floor(n: float) -> int:
    """Returns the floor of a float."""
    return math.floor(n)
```

### 3. Basic annotations - to_str

Write a type-annotated function `to_str` that takes a float `n` as argument and returns the string representation of the float.
* File: `3-to_str.py`

```python
#!/usr/bin/env python3
"""
Module for to_str function
"""

def to_str(n: float) -> str:
    """Converts a float to a string."""
    return str(n)
```

### 4. Define variables

Define and annotate the following variables with the specified values:
* `a`, an integer with a value of 1
* `pi`, a float with a value of 3.14
* `i_understand_annotations`, a boolean with a value of True
* `school`, a string with a value of "Holberton"
* File: `4-define_variables.py`

```python
#!/usr/bin/env python3
"""
Module for variable definitions with type annotations
"""

a: int = 1
pi: float = 3.14
i_understand_annotations: bool = True
school: str = "Holberton"
```

### 5. Complex types - list of floats

Write a type-annotated function `sum_list` which takes a list `input_list` of floats as argument and returns their sum as a float.
* File: `5-sum_list.py`

```python
#!/usr/bin/env python3
"""
Module for sum_list function
"""

from typing import List

def sum_list(input_list: List[float]) -> float:
    """Returns the sum of a list of floats."""
    return sum(input_list)
```

### 6. Complex types - mixed list

Write a type-annotated function `sum_mixed_list` which takes a list `mxd_lst` of integers and floats and returns their sum as a float.
* File: `6-sum_mixed_list.py`

```python
#!/usr/bin/env python3
"""
Module for sum_mixed_list function
"""

from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of a list of integers and floats as a float."""
    return sum(mxd_lst)
```

### 7. Complex types - string and int/float to tuple

Write a type-annotated function `to_kv` that takes a string `k` and an int or float `v` as arguments and returns a tuple. The first element of the tuple is the string `k`. The second element is the square of the int/float `v` and should be annotated as a float.
* File: `7-to_kv.py`

```python
#!/usr/bin/env python3
"""
Module for to_kv function
"""

from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with a string and the square of int/float as float."""
    return (k, float(v ** 2))
```

### 8. Complex types - functions

Write a type-annotated function `make_multiplier` that takes a float `multiplier` as argument and returns a function that multiplies a float by multiplier.
* File: `8-make_multiplier.py`

```python
#!/usr/bin/env python3
"""
Module for make_multiplier function
"""

from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by a given multiplier."""
    def multiplier_function(number: float) -> float:
        """Multiplies a float by the multiplier."""
        return number * multiplier
    return multiplier_function
```

### 9. Let's duck type an iterable object

Annotate the below function's parameters and return values with the appropriate types:
* File: `9-element_length.py`

```python
#!/usr/bin/env python3
"""
Module for element_length function
"""

from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with sequence and its length."""
    return [(i, len(i)) for i in lst]
```

## Usage

Each task file can be imported and tested individually. For example:

```python
$ cat 0-main.py
#!/usr/bin/env python3
add = __import__('0-add').add

print(add(1.11, 2.22) == 1.11 + 2.22)
print(add.__annotations__)

$ ./0-main.py
True
{'a': <class 'float'>, 'b': <class 'float'>, 'return': <class 'float'>}
```


## Resources

* Python 3 typing documentation
* MyPy cheat sheet

## Author

* Guney Tasdelen
