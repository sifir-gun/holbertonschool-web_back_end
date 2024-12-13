#!/usr/bin/env python3
"""
Script to provide statistics about Nginx logs stored in MongoDB.
"""

from pymongo import MongoClient


def log_stats():
    """
    Provides stats about Nginx logs stored in MongoDB.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collecte = db.nginx

    # Nombre total de logs
    log_count = collection.count_documents({})
    print(f"{total_logs} logs")

    # Méthodes
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        # Quatre espaces avant "method"
        # pour correspondre exactement à l'exemple
        print(f"\tmethod {method}: {count}")

    # Compter les requêtes status
    status_checks = collection.count_documents(
      {"method": "GET", "path": "/status"})
    print(f"{status_checks} status check")


if __name__ == "__main__":
    log_stats()
