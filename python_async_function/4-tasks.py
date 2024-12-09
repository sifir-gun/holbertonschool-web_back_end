#!/usr/bin/env python3
"""
Ce module définit une fonction asynchrone task_wait_n qui exécute n fois
la coroutine associée à task_wait_random(max_delay) puis retourne une liste
des délais triés.
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute n fois task_wait_random(max_delay),
    attend que toutes les tâches soient terminées
    et retourne la liste triée des délais.
    """
    tasks: List[asyncio.Task] = [task_wait_random(max_delay) for _ in range(n)]
    delays: List[float] = []
    for finished_task in asyncio.as_completed(tasks):
        delay: float = await finished_task
        delays.append(delay)
    return sorted(delays)
