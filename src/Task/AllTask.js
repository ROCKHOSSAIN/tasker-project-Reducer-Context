const Tasks = [
    {
        "id": crypto.randomUUID(),
        "title": "Learn React Native",
        "description":
            "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently",
        "tags": ["web", "Python", "Api"],
        "priority": "High",
        "isFavorite": true,
    },
    {
        "id": crypto.randomUUID(),
        "title": "API Data Synchronization with Python",
        "description":
            "Implement a Python solution to synchronize data between an API and a third-party database securely optimizing data exchange.",
        "tags": ["Python", "API", "DATA"],
        "priority": "High",
        "isFavorite": false,
    },
    {
        "id": crypto.randomUUID(),
        "title": "Efficient Web API Connectivity in Python",
        "description":
            "Develop a Python-based solution for connecting an API to athird-party database securely, focusing on efficient data handling and exchange.",
        "tags": ["web", "Python", "Api"],
        "priority": "High",
        "isFavorite": true,
    },
    {
        "id": crypto.randomUUID(),
        "title": "Data Handling",
        "description":
            "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
        "tags": ["web", "Python", "Security"],
        "priority": "High",
        "isFavorite": false,
    }
]
 function getAllTask(){
    return Tasks
}
export  {getAllTask}