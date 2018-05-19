const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({     
    //     _id: new ObjectID('5af840cef5ae7c0a346b36da')
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });

    //=========================================================
    // Excercise: Update the age with inc in Users collection
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5af7a11a94195812602e75d9')
    }, {
        $inc:{
            age: -1 
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});

