#!/usr/bin/env python3
"""
Ce module définit une fonction asynchrone, wait_n, qui lance n coroutines
attendant un délai aléatoire via wait_random(max_delay) et
récupère leurs délais
dans l'ordre où elles se terminent, sans utiliser la fonction sort().
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Lance n coroutines de type wait_random(max_delay),
    et retourne la liste des délais (float) dans l'ordre
    où les tâches se terminent, sans utiliser sort().

    Arguments:
        n (int): Nombre de tâches à lancer.
        max_delay (int): Délai maximum pour chaque coroutine.

    Retourne:
        List[float]: Liste des délais terminés, triée par ordre d'achèvement.
    """
    tasks: List[asyncio.Task] = [asyncio.create_task(
      wait_random(max_delay)) for _ in range(n)]
    delays: List[float] = []
    for finished_task in asyncio.as_completed(tasks):
        delay: float = await finished_task
        delays.append(delay)
    return delays
