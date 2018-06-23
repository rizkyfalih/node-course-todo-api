const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b2db8914e35c6f81e45f484';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//=================================================================
// Exercise: Query using User.findById

var id = '5b2dc506eec3b37012967a7e1';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    
    console.log(JSON.stringify(user, undefined, 2));

}, (e) => {
    console.log(e);
});
