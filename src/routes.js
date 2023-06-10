const express = require('express');
const { contadorDePalavras } = require('./controllers/contadorDePalavra');

const routes = express();


routes.get('/', (req, res) => { res.send('tudo ok') });

routes.get('/contador', contadorDePalavras);

module.exports = routes;