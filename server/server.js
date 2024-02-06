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
    user: "root",
    host: "localhost",
    password: "",
    database : "loginregister"
})
app.post('/register',(req,res) =>{
    const sql = "INSERT INTO register (name,email,password) VALUES (?,?,?)";

    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    db.query(sql,values,(err , data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/login',(req,res) => {
    const sql = "select * from register where email =? and password =?";
    // console.log(req)
    db.query(sql,[req.body.email,req.body.password],(err , data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }
        else{
            return res.json("Faile");
        }
    })
})
app.listen(8080,() =>{
    console.log("Runing.....");
})