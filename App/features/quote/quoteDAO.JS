/**
 *  Import quote model 
 */
let quoteModel = require('./model');

/**
 * Query the mongo database using the parameter id to delete a record
 * @param {String} id The id of some record saved on database
 */
function deleteQuote(id){
    return new Promise((resolve, reject) => {
        quoteModel.findByIdAndRemove({
            "_id": id
        }, {useFindAndModify: false},
        function(err, doc) {
            if (err) {
                reject(err);
            }
            resolve(doc);
        });
    });
}

/**
 * Query the mongo database using the parameter id to bring a record
 * @param {String} id The id of some record saved on database
 */
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

module.exports = { getQuote, deleteQuote }