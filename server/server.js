var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json(cookieParser));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "loginregister"
})

app.listen(8080,() =>{
    console.log("Runing.....");
})