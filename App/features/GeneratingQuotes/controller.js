const httpStatus = require('http-status');

const {
    generateImageFromQuote
} = require('./util');


async function generateImageByQuote(req, res){
    let response = await generateImageFromQuote();
    return res.status(httpStatus.OK).send(response);
}

module.exports = {
    generateImageByQuote
}