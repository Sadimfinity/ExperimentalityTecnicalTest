const httpStatus = require('http-status');

const {
    generateQuote,
    generateImageFromText
} = require('./util');

async function generate(req, res){
    let response = await generateQuote();
    return res.status(httpStatus.OK).send(JSON.stringify(response));
    //     {
    //         id: "an unique id",
    //         quote: "a nice quote",
    //         image: "a beautiful picture url related"
    //     }
    // )
}

async function generateImage(req, res){
    let response = await generateImageFromText();
    return res.status(httpStatus.OK).send(response);
}

module.exports = {
    generate,
    generateImage
}