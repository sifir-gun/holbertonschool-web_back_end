#!/usr/bin/env python3
"""
Ce module définit une coroutine asynchrone qui attend un délai aléatoire
avant de retourner la durée de ce délai.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Coroutine asynchrone qui attend un délai aléatoire entre 0 et max_delay
    secondes (inclus), puis retourne la durée attendue.

    Arguments:
        max_delay (int): Durée maximale (en secondes) du délai. Par défaut, 10

    Retourne:
        float: Le délai réel attendu.
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
