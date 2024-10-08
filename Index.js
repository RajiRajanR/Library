const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./DbConnection');
app.use(bodyParser.json());
app.use(cors());

const route= require("./Routes/route");
app.use('/',route);
app.use(express.static( `${__dirname}/upload`));

app.listen(4098,function(){
    console.log("4098 server connected to database..");
})