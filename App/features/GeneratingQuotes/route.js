/**
 * Router import
 */
const Router = require('express').Router;

const { generateImageByQuote, deleteQuoteById, getQuoteById } = require('./controller');

let router = new Router();

router.route('/api/v1/generate-changing-life-quote')
    .get((req,res) => {
        generateImageByQuote(req, res);
    })

router.route('/api/v1/getQuote/:id')
    .get((req,res) => {
        getQuoteById(req, res);
    })

router.route('/api/v1/deleteQuote/:id')
    .delete((req,res) => {
        deleteQuoteById(req, res);
    })

module.exports = router;