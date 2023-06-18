// const characters = require('./characters.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        const characters = await axios("http://database:8004/Character ")
        return characters.data;
    },

    create: async () => {
        throw Error('error al crear personajes')
    }
    
} 