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

function deleteQuote(id){
    return new Promise((resolve, reject) => {
        quoteModel.findByIdAndRemove({
            "_id": id
        },
        function(err, doc) {
            if (err) {
                reject(err);
            }
            resolve(doc);
        });
    });
}

function getQuote(id){
    return new Promise((resolve, reject) => {
        quoteModel.findOne({
            "_id": id
        },
        function(err, doc){
            if (err){
                reject(err);
            }
            resolve(doc);
        })
    })
}


module.exports = {quoteModel, deleteQuote, getQuote};