const mongoose = require('mongoose');

let quote = {
    quote: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}

let quoteSchema = new mongoose.Schema(quote);
let quoteModel = mongoose.model('Quote', quoteSchema);

module.exports = quoteModel;