#!/usr/bin/env python3
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Crée et retourne une tâche asyncio basée sur la coroutine wait_random.

    Arguments:
        max_delay (int):
        Temps maximum à attendre avant de retourner le résultat.

    Retourne:
        asyncio.Task: Tâche asyncio qui attend de manière asynchrone un délai.
    """
    return asyncio.create_task(wait_random(max_delay))
