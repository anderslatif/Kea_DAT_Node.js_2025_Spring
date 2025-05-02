## Structure

MySQL     vs.      MongoDB
Database           Database
Table              Collection
Row                Document
Column             Key
Cell               Value

## When to use MongoDB

1. When you have a variable schema
2. When you want to prototype (Proof of Concept)
3. Frankenstein (MongoDB for logging)

MongoDB, all validation happens in the code layer
SQL, validation happens in the database layer


## How to achieve relations in MongoDB

1. Create a key in one object that can be used to look up in another object in another collections

2. Denormalization 


## Commands

MySQL                 vs.              MongoDB
CREATE DATABASE <database_name>        use <database_name> 
CREATE TABLE <table_name>              db.createCollection("<collection_name>")
DROP TABLE <table_name>                db.<collection_name>.drop()

## Crud

MySQL                 vs.              MongoDB

SELECT                                 find({ <key>: <search_criteria> })
INSERT                                 insertOne, insertMany, bulkWrite
UPDATE                                 updateOne({"search criteria"}, { $set: { "update with" } }) , updateMany
                                       replaceOne, replaceMany (completely overwrites the document)
DELETE                                 deleteOne, deleteMany

