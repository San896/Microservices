const express = require("express");

const server = express();

server.use(express.json());
server.use("dev");

module.exports = server;