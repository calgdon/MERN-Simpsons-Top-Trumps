use toptrumps;
db.dropDatabase()

db.simpsonsTopTrumps.insertMany([
    {"name" : "Homer Simpson",
    "age" : "32"
    },
    {"name" : "Marge Simpson",
    "age" : "31"
    },
    {"name" : "Bart Simpson",
    "age" : "11"
    },
    {"name" : "Lisa Simpson",
    "age" : "9"
    },
    {"name" : "Maggie Simpson",
    "age" : "1"
    },
])

