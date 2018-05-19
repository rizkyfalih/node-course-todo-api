// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // Insert some records
    // db.collection('Todos').insertOne({
    //     text: 'Play game',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Excercise: Insert new doc into Users (name, age, location)
    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 20,
        location: 'Bandung'  
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    });

    client.close();
});
