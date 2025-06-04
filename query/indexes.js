//Use this file to define indexes for your queries
db.restaurants.createIndex({ "address.coord": "2dsphere" });
