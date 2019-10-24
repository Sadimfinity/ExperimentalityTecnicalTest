/**
 * NPM packages
 */
const mongoose = require('mongoose');


/**
 * Creates the model of the records saved in database
 */
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

/**
 * Create and save the schema of the records that will being saved on DB
 */

let quoteSchema = new mongoose.Schema(quote);
let quoteModel = mongoose.model('Quote', quoteSchema);

module.exports = quoteModel;