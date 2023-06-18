// const films = require('./films.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        const films = await axios("http://database:8004/Film")
        return films.data;
    },
    create: async () => {
        throw Error('error al crear pelicula')
    }
    
}