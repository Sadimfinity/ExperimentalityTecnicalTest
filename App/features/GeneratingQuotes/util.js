let axios = require("axios");

async function generateQuote(){
    const response = await axios({
        "method":"GET",
        "url":"https://andruxnet-random-famous-quotes.p.rapidapi.com/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"andruxnet-random-famous-quotes.p.rapidapi.com",
        "x-rapidapi-key":"cdaa70ead4msh8584e4e892b832cp12d559jsn518cafbf33e0"
        },"params":{
        "cat":"famous",
        "count":"1"
        }
        })
    console.log(response.data[0]);
    return response.data[0];
}

module.exports = { generateQuote };