const Character = require('../data')
const { response } = require('../utils');



module.exports =async (req, res) => {
    const characters = await Character.list();
    // res.status(200).send(characters);
    response(res,200, characters)

};