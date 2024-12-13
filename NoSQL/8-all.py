#!/usr/bin/env python3
"""8-all.py"""
def list_all(mongo_collection):
    """
    Lists all documents in a collection.

    Args:
        mongo_collection: The pymongo collection object.

    Returns:
        A list of documents, or an empty list if no document is found.
    """
    return list(mongo_collection.find())
