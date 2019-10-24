/**
 * NPM required packages
 */
const Router = require('express').Router;

/**
 *  Imported methods of controller 
 */
const { generateImageByQuote, deleteQuoteById, getQuoteById } = require('./controller');

let router = new Router();

/**
 * Endpoint of the generate-changing-life-quote GET method
 */
router.route('/generate-changing-life-quote')
    .get((req,res) => {
        generateImageByQuote(req, res);
    })

/**
 * Endpoint of the GET record method
 */
router.route('/get-record/:id')
    .get((req,res) => {
        getQuoteById(req, res);
    })

/**
 * Endpoint of the DELETE record method
 */
router.route('/delete-record/:id')
    .delete((req,res) => {
        deleteQuoteById(req, res);
    })

module.exports = router;