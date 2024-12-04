#!/usr/bin/env python3
"""
Module contenant la fonction to_kv avec annotations de type.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Prend une chaîne de caractères et un entier ou flottant, et
    retourne un tuple.
    Le premier élément est la chaîne de caractères k.
    Le second élément est le carré de v, en tant que flottant.

    Args:
        k (str): La chaîne de caractères.
        v (Union[int, float]): Un entier ou un flottant.

    Returns:
        Tuple[str, float]: Un tuple contenant k et le carré de v.
    """
    return (k, float(v ** 2))
