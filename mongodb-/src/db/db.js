const mongoose = require('mongoose')

function connect(){
    mongoose.connect("mongodb://localhost:27017/node-backend")
    .then(() => {
        console.log('db connected')
    })
    .catch(err => {
        console.log('error')
    })
}

module.exports = connect;
