const path = require('path');
const express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var publicpath = path.join(__dirname+'../public');
app.use(express.static(publicpath));
app.listen(port,()=>{
    console.log(`server is up on ${port}`);
})