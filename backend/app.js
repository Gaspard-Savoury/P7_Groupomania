const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const userRoutes = require('./routes/user')


// create connection
const db = mysql.createConnection({
    host :      'localhost', 
    user :      'root',
    password :  'password'
});

// connect to mysql 
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('Mysql is connected!')
});

// create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE groupomania';
    db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send('database created..')
    });
});

// create a table
app.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, password VARCHAR(50), first_name VARCHAR(50), last_name VARCHAR(50), job VARCHAR(50)';
    db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send('users table created..')
    });
})

module.exports = app;
