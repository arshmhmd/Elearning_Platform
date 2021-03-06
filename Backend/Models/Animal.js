// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const AnimalSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    desc: {
        type: String
    }
});

module.exports = mongoose.model('animals', AnimalSchema);