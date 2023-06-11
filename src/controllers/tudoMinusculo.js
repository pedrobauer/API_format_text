const tudoMinusculo = (req, res) => {
    const { phrase } = req.body;

    const tudoMinusculo = phrase.toLowerCase();

    return res.status(200).json(tudoMinusculo);
}

module.exports = {
    tudoMinusculo
}