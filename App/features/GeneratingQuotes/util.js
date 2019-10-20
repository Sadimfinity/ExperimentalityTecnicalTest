let axios = require("axios");

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

async function generateImageFromText(){
    const response = await axios({
        "method":"GET",
        "url":"https://pixabay.com/api/",
        "params":{
            "key":"14005004-0c82c985687a5a13b9ff0fe84",
            "q":"happiness"
        }
    })
    console.log(response.data);
    return response.data.hits[0].largeImageURL;

}

async function generateImageFromQuote(text){

}

module.exports = { generateQuote, generateImageFromText };