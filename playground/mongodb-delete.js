const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Play game'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Play game'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // Exercise: deleteMany all john in Users collection and use findOneAndDelete by _id
    // deleteMany
    // db.collection('Users').deleteMany({name: 'John'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5af7a1486c1b9d1254fe3a3c')}).then((result) => {
        console.log(result);
    });

    //client.close();
});
