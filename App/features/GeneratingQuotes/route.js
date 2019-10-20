/**
 * Router import
 */
const Router = require('express').Router;

const { generate, generateImage } = require('./controller');

let router = new Router();

router.route('/api/v1/generate-changing-life-quote')
    .get((req, res) => {
        generate(req, res);
    })

router.route('/test')
    .get((req, res) => {
        generateImage(req, res);
    })

module.exports = router;