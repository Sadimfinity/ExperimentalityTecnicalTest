/**
 * NPM packages
 */

const httpStatus = require('http-status');

/**
 *  Imported methods 
 */
const {
    generateImageFromQuote
} = require('./quote');

const {
    getQuote,
    deleteQuote
} = require('./quoteDAO');

/**
 * This method send the generated quote and image in HTTP 200 status, in case of error, returns and HTTP 500 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */
async function generateImageByQuote(req, res) {
    try {
        let newQuote = await generateImageFromQuote();
        return res.status(httpStatus.OK).send(newQuote);
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * This method get a record of DB and return HTTP 200 status. In case of error, returns and HTTP 404 or 400 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */

async function getQuoteById(req, res) {
    let idQuote = req.params.id;
    if (idIsCorrect(idQuote)) {
        try {
            let newQuote = await getQuote(idQuote);
            if (newQuote) {
                return res.status(httpStatus.OK).send(newQuote);
            } else {
                return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
            }
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' });
    }
}

/**
 * This method delete a record of DB and return HTTP 200 status. In case of error, returns and HTTP 404 or 400 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */

async function deleteQuoteById(req, res) {
    let idQuote = req.params.id;
    if (idIsCorrect(idQuote)) {
        try {
            let deletedQuote = await deleteQuote(idQuote);
            if (deletedQuote) {
                return res.status(httpStatus.OK).send(deletedQuote);
            } else {
                return res.status(httpStatus.NOT_FOUND).send({ message: 'No se ha podido borrar el registro de la base de datos' });
            }
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'No se ha podido borrar el registro de la base de datos' });
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' });
    }
}

/**
 * This method verifies if an id entered by parameter, matchs with the structure of generation of the ids made by mongoose
 * @param {*} id The identification of a record
 */

function idIsCorrect(id) {
    return id.match(/^[0-9a-fA-F]{24}$/);
}

module.exports = {
    generateImageByQuote,
    getQuoteById,
    deleteQuoteById
}