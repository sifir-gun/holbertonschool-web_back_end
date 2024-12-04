#!/usr/bin/env python3
"""
Module contenant la fonction sum_list avec annotations de type.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Calcule la somme d'une liste de nombres flottants et renvoie le résultat.

    Args:
        input_list (List[float]): La liste de nombres flottants à sommer.

    Returns:
        float: La somme des nombres dans input_list.
    """
    return sum(input_list)
