const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    books: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'BookFree' 
        }
    ]
});

const bookSchema = new mongoose.Schema({
    labelBook: {
        type: String,
        required: true
    },
    logoBook:{
        type:String,
        require:true
    },
    imgBook: {
        type: String,
        required: true
    },
    nameBook: {
        type: String,
        required: true,
    },
    descriptionBook: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishingCompany: {
        type: String,
        required: true
    },
    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre' 
    }]
});

const BookFree = mongoose.model('BookFree', bookSchema);
const BookGenre = mongoose.model('Genre', genreSchema);

module.exports = { BookFree, BookGenre };
