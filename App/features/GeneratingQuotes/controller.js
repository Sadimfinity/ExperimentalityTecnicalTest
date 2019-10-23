const httpStatus = require('http-status');

const {
    generateImageFromQuote
} = require('./util');

const {
    getQuote,
    deleteQuote
} = require('./model')


async function generateImageByQuote(req, res) {
    let response = await generateImageFromQuote();
    return res.status(httpStatus.OK).send(response);
}

async function getQuoteById(req, res) {
    let id = req.params.id;
    if (idIsCorrect(id)) {
        let response = await getQuote(id);
        if (response) {
            return res.status(httpStatus.OK).send(response);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' })
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' })
    }
}

async function deleteQuoteById(req, res) {
    let id = req.params.id;
    if (idIsCorrect(id)) {
        let response = await deleteQuote(id);
        if (response) {
            return res.status(httpStatus.OK).send(response);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'No se ha podido borrar el registro de la base de datos' })
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' })
    }
}

function idIsCorrect(id) {
    return id.match(/^[0-9a-fA-F]{24}$/);
}

module.exports = {
    generateImageByQuote,
    getQuoteById,
    deleteQuoteById
}