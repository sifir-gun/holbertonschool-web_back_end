#!/usr/bin/env python3
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Lance n tâches asynchrones basées sur task_wait_random et retourne
    une liste des délais, triés par ordre croissant.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for finished_task in asyncio.as_completed(tasks):
        delay = await finished_task
        delays.append(delay)
    return delays
