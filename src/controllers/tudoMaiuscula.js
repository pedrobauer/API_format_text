const tudoMaiusculo = (req, res) => {
    const { phrase } = req.body;

    const maiusculo = phrase.toUpperCase();

    return res.status(200).json(maiusculo.toUpperCase());
}

module.exports = {
    tudoMaiusculo
}