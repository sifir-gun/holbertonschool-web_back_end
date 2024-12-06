#!/usr/bin/env python3
import asyncio
from typing import Any
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Crée et retourne une tâche asyncio basée sur la coroutine wait_random.
    """
    return asyncio.create_task(wait_random(max_delay))
