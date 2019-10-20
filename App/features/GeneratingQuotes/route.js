/**
 * Router import
 */
const Router = require('express').Router;

const { generateImageByQuote } = require('./controller');

let router = new Router();

router.route('/api/v1/generate-changing-life-quote')
    .get((req,res) => {
        generateImageByQuote(req, res);
    })

module.exports = router;