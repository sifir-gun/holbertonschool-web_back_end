#!/usr/bin/env python3
import asyncio
import time
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps total d'exécution de wait_n(n, max_delay) et retourne
    le temps moyen par tâche (total_time / n).

    Arguments:
        n (int): Nombre de tâches à lancer.
        max_delay (int): Délai maximal pour chacune des tâches.

    Retourne:
        float: Le temps moyen par tâche.
    """
    start: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end: float = time.time()
    total_time: float = end - start
    return total_time / n
