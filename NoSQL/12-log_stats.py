#!/usr/bin/env python3
"""
Script to provide stats about Nginx logs in MongoDB.
"""

from pymongo import MongoClient


def log_stats():
    """
    Provides stats about Nginx logs stored in MongoDB.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"method {method}: {count}")

    status_checks = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_checks} status check")


if __name__ == "__main__":
    log_stats()
