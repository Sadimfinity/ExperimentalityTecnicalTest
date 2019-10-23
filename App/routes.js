/**
 * Router import
 */
const Router = require('express').Router;
let router = new Router();
let quote = require('./features/GeneratingQuotes/route')

router.use('/', quote);

module.exports = router;

// /**
//  * Paths defined to each resource
//  */
// router.use('/resourcePath', resource);

// module.exports = router;