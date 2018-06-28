var express = require('express'); // Library for create website url
var bodyParser = require('body-parser'); // Body-Parser for postman
var {ObjectID} = require('mongodb'); // Library for create database

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// Initialize port and express
var app = express();
const port = process.env.PORT || 3000; // Initialize post from server (Heroku) or from local port

// Initialize body-parser type
app.use(bodyParser.json());

// Create url '/todos' with menu/module POST(To send the data to server/database)
app.post('/todos',(req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e)=> {
        res.status(400).send(e);
    });

});

// Create url '/todos' with menu/module GET(To get the data from server/database)
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

// Create url GET '/todos/:id' with parameter input id to view the id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
  

});

// Create url GET '/todos/:id' with parameter input id to remove a data by id
app.get('/todos/:id', (req, res) => {
    // get the id
    var id = req.params.id;

    // validate the id -> not valid? return 404
    if(ObjectID.isValid(id)){
        return res.status(404).send();
    }

    // remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send(todo);
    }).catch((e) => {
        res.status(400).send();
    });
        // success
            // if no doc, send 404
            // if doc, send doc back with 200
        // error
            // 400 with empty body
});


//=====================================
app.post('/users',(req, res) => {
    var user = new User({
        email: req.body.email
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e)=> {
        res.status(400).send(e);
    });

});




app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};