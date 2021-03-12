const express = require('express');
const app = express();
const cors = require('cors');
const imageHandler = require('./imageHandler');

app.use(cors());
app.use(express.json());



app.get('/getimages', (req, res) =>{
    const fileDir = imageHandler.getImageArray();
    res.send(fileDir);
});

app.listen(3001, () => {
    console.log("Server is running");
});