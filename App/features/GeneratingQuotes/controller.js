const httpStatus = require('http-status');

const {
    generateQuote
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

module.exports = {
    generate
}