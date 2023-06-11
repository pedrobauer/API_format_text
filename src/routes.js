const express = require('express');

const { contadorDePalavras } = require('./controllers/contadorDePalavra');
const { tudoMaiusculo } = require('./controllers/tudoMaiuscula');
const { tudoMinusculo } = require('./controllers/tudoMinusculo');

const routes = express();

routes.get('/', (req, res) => { res.send('tudo ok') });

routes.get('/contador', contadorDePalavras);

routes.get('/maiusculo', tudoMaiusculo);

routes.get('/minusculo', tudoMinusculo);

module.exports = routes;