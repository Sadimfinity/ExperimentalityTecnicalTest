let axios = require("axios");

const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

let { quoteModel } = require('./model');

async function generateQuote(){
    const response = await axios({
        "method":"GET",
        "url":"https://andruxnet-random-famous-quotes.p.rapidapi.com/",
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"andruxnet-random-famous-quotes.p.rapidapi.com",
            "x-rapidapi-key":"cdaa70ead4msh8584e4e892b832cp12d559jsn518cafbf33e0"
        },
        "params":{
            "cat":"famous",
            "count":"1"
        }
        })
    return response.data[0].quote;
}

async function generateImageFromText(quote){
    let serviceKey = "38448ff158a9473fa9534b7cce77fc6f";
    let credentials = new CognitiveServicesCredentials(serviceKey);
    let imageSearchApiClient = new ImageSearchAPIClient(credentials);
    let imageResults = await imageSearchApiClient.imagesOperations.search(quote);
    let firstImageResult = imageResults.value[1].contentUrl;
    return firstImageResult;
}

async function generateImageFromQuote(){
    let quote = await generateQuote();
    let image = await generateImageFromText(quote);
    let quoteWithImage = {
        quote,
        image
    }
    let quoteSaved = new quoteModel(quoteWithImage).save(); 
    return quoteSaved;
}

module.exports = { generateImageFromQuote };
