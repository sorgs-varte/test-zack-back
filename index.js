const express = require('express');
const http = require('http');
const conf = require('./config');

const app = express();

const httpServer = http.createServer(app);

const router = require("./router");
const mongoose = require('mongoose');
mongoose.connect('mongodb://'+conf.dbpath+"/"+conf.dbname,{useNewUrlParser:true});
const port = 8000;

router(app);


httpServer.listen(port);
console.log('Server listening  on:', port);