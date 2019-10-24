/**
 * Router import
 */
const Router = require('express').Router;
let router = new Router();
let quote = require('./features/quote/route')

router.use('/api/v1/', quote);

module.exports = router;

