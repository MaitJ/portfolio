const express = require('express');
const app = express();
const cors = require('cors');
const imageHandler = require('./imageHandler');

app.use(cors());
app.use(express.json());



app.get('/getimages', (req, res, next) =>{
    req.pics = imageHandler.getImageArray();
    next();
}, (req, res) =>{
    res.send(req.pics);
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(3001, () => {
    console.log("Server is running");
});