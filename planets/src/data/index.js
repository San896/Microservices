// const planets = require('./planets.json');
const axios = require('axios');

module.exports = {
    list: async () => {
        const planets = axios("http://database:8004/Planet")
        return planets.data;
    },

    create: async () => {
        throw Error('error al crear planeta')
    }
    
}