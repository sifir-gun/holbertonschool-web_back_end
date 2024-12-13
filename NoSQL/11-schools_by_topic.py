#!/usr/bin/env python3
"""
Module defining a function to list schools by topic in a MongoDB collection.
"""

def schools_by_topic(mongo_collection, topic):
    """
    Finds and returns a list of all schools having a specific topic.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic to search for.

    Returns:
        list: A list of schools matching the given topic.
    """
    return list(mongo_collection.find({"topics": topic}))
