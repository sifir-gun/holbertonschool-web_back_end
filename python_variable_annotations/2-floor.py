#!/usr/bin/env python3
"""
Module contenant la fonction floor avec annotations de type.
"""

import math


def floor(n: float) -> int:
    """
    Renvoie la partie entière inférieure d'un nombre flottant.

    Args:
        n (float): Le nombre flottant dont on veut la partie entière
        inférieure.

    Returns:
        int: La partie entière inférieure de n.
    """
    return math.floor(n)
