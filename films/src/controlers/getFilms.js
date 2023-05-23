const Films = require('../data')

module.exports =async (req, res) => {
    const films = await Fharacter.list();
    res.status(200).send(films);

};