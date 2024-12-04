#!/usr/bin/env python3
"""
Module contenant la fonction element_length avec annotations de type.
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Prend un itérable de séquences et renvoie une liste de tuples,
    où chaque tuple contient une séquence de l'itérable et sa longueur.

    Args:
        lst (Iterable[Sequence]): Un itérable contenant des séquences.

    Returns:
        List[Tuple[Sequence, int]]: Une liste de tuples avec les
        séquences et leurs longueurs.
    """
    return [(i, len(i)) for i in lst]
