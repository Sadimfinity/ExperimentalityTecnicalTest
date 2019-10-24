/**
 * NPM packages
 */

const axios = require("axios");
const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

/**
 *  Import quote model 
 */

let quoteModel = require('./model');


/**
 * This method consumes the Random Famous Quotes API to generates, as the name says, a random famous quote and return the first value
 */
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
    let firstQuoteResult = response.data[0].quote;
    return firstQuoteResult;
}

/**
 * This method consumes the Bing Image API to generate an image related with the parameter 'quote' 
 * @param {String} quote The parameter 'quote' contains the necesary text to consume the Bing API, returning a image asociated with the text
 */
async function generateImageFromText(quote){
    let serviceKey = "38448ff158a9473fa9534b7cce77fc6f";
    let credentials = new CognitiveServicesCredentials(serviceKey);
    let imageSearchApiClient = new ImageSearchAPIClient(credentials);
    let imageResults = await imageSearchApiClient.imagesOperations.search(quote);
    let firstImageResult = imageResults.value[1].contentUrl;
    return firstImageResult;
}

/**
 * This method uses the two previous methods to relate an random famous generated quote to an image and save this to a database
 */

async function generateImageFromQuote(){
    let quote = await generateQuote();
    let image = await generateImageFromText(quote);
    let quoteWithImage = {
        quote,
        image
    }
    let quoteSaved = new quoteModel(quoteWithImage).save();         //The quote with image is stored on database
    return quoteSaved;
}

module.exports = { generateImageFromQuote };
