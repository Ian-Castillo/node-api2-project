const express = require ('express'); // brings in express

const server = express(); // initializing the server using express

server.get("/", (req,res) => {
    res.send("Hello from server.js")
});



//
module.exports=server