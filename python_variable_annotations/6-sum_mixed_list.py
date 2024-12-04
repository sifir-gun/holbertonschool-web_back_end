#!/usr/bin/env python3
"""
Module contenant la fonction sum_mixed_list avec annotations de type.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calcule la somme d'une liste contenant des entiers et des flottants et
    renvoie le résultat en tant que flottant.

    Args:
        mxd_lst (List[Union[int, float]]): La liste de nombres à sommer.

    Returns:
        float: La somme des nombres dans mxd_lst.
    """
    return sum(mxd_lst)
