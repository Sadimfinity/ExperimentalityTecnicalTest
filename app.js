/**
 * NPM packages
 */
const express = require('express');

/**
 *  Imports the server of server.js 
 */
const server = require('./server');

/**
 * Initializes the express server
 */
let app = new express();
server(app);

app.listen(app.get('port'), () => {
    console.log(`The app is listening on the port ${app.get('port')}`);
});