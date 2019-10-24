/**
 * Router import
 */
const Router = require('express').Router;
let router = new Router();
let quote = require('./features/quote/route')

router.use('/', quote);

module.exports = router;

