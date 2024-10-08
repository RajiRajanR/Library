var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error :'));

db.once('open', function () {
    console.log("Connection Successfully");
})

module.exports = db