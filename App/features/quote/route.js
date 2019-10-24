const Router = require('express').Router;

const { generateImageByQuote, deleteQuoteById, getQuoteById } = require('./controller');

let router = new Router();

router.route('/generate-changing-life-quote')
    .get((req,res) => {
        generateImageByQuote(req, res);
    })

router.route('/get-record/:id')
    .get((req,res) => {
        getQuoteById(req, res);
    })

router.route('/delete-record/:id')
    .delete((req,res) => {
        deleteQuoteById(req, res);
    })

module.exports = router;