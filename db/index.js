
const server = require("./src/server");

const { Character, Film, Planet } = require("./src/database");

// Character.insert({
//     _id:"200",
//     name:"tarza coco",
//     birth_year:"1991",
// }).then((res)=> console.log(res))

// Planet.list().then((res) => console.log(res))

server.listen(8004, () => {
    console.log("Database service on Port 8004")
});