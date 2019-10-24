const httpStatus = require('http-status');

const {
    generateImageFromQuote
} = require('./util');

const {
    getQuote,
    deleteQuote
} = require('./model');


async function generateImageByQuote(req, res) {
    try {
        let newQuote = await generateImageFromQuote();
        return res.status(httpStatus.OK).send(newQuote);
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function getQuoteById(req, res) {
    let idQuote = req.params.id;
    if (idIsCorrect(idQuote)) {
        try {
            let response = await getQuote(idQuote);
            if (response) {
                return res.status(httpStatus.OK).send(response);
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

async function deleteQuoteById(req, res) {
    let id = req.params.id;
    if (idIsCorrect(id)) {
        try {
            let response = await deleteQuote(id);
            if (response) {
                return res.status(httpStatus.OK).send(response);
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

function idIsCorrect(id) {
    return id.match(/^[0-9a-fA-F]{24}$/);
}

module.exports = {
    generateImageByQuote,
    getQuoteById,
    deleteQuoteById
}