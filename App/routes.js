/**
 * NPM packages
 */
const Router = require('express').Router;

/**
 * Import the different routes of the features
 */
let quote = require('./features/quote/route');

let router = new Router();

router.use('/api/v1/', quote);

module.exports = router;

