const inverter = (req, res) => {
    const { phrase } = req.body;

    const fraseInvertida = [];

    for (const i of phrase) {

    }

    return res.status(200).json(fraseInvertida);
}

module.exports = {
    inverter
}