/**
 * Router import
 */
const Router = require('express').Router;

const { generate } = require('./controller');

let router = new Router();

router.route('/api/v1/generate-changing-life-quote')
    .get((req, res) => {
        generate(req, res);
    })

module.exports = router;