const contadorDePalavras = (req, res) => {
    const { phrase } = req.body;

    const quantidade = phrase.split(' ');

    return res.status(200).json(`A frase contem ${quantidade.length} palavras`);
}

module.exports = {
    contadorDePalavras
}