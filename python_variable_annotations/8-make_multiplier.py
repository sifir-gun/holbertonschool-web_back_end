#!/usr/bin/env python3
"""
Module contenant la fonction make_multiplier avec annotations de type.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Prend un flottant 'multiplier' et renvoie une fonction qui multiplie
    un flottant donné par 'multiplier'.

    Args:
        multiplier (float): Le multiplicateur.

    Returns:
        Callable[[float], float]: Une fonction qui multiplie un
        flottant par 'multiplier'.
    """
    def multiplier_function(number: float) -> float:
        """Multiplie 'number' par 'multiplier'."""
        return number * multiplier

    return multiplier_function
