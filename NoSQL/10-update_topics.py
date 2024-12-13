#!/usr/bin/env python3
"""
This module defines a function to update the topics of a MongoDB document.
"""

def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a document in the collection based on the name.

    Args:
        mongo_collection: The pymongo collection object.
        name (str): The name of the school to update.
        topics (list): The new list of topics.

    Returns:
        None
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
