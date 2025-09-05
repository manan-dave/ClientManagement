const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

/* app.post('/clientRegister/',(req,res) =>{
    const {name,email,address,password}= req.body;

    if(err){
        console.log('name is ' +name ) ;
        res.status(500).json({error:'Error occured'});
    }else{

        console.log('name is ' +name ) ;
        res.status(200).json({error:'Error occured'});
    }
}); */

const db = mysql.createConnection({
    host:'localhost',
    database:'angularcrud',
    user:'root',
    password:'root123'
});

db.connect(err =>{
    if(err){
        console.log('Error Ocuured...');
    }else{
        console.log('Connection Successful');
    }
});

app.post('/login',(req,res) =>{

    
    const {username, password} = req.body;
    const sql = 'SELECT CASE   WHEN EXISTS ( SELECT 1 FROM users     WHERE username = ? AND password = ?  ) THEN \'Success\'  ELSE \'Fail\' END AS login_status';
    db.query(sql,[username, password],(err,result) => {
        if (err){
            console.error('Query error:', err);
            res.status(500).json({error:'Error occured'});
        }else{
            console.error('Query success:', result);
            res.status(200).json(result);
        }

    })
});


app.get('/getClients',(req,res) =>{
    
    const sql = 'select name,email,address,created_at from client';
    db.query(sql,(err,result) => {
        if (err){
            console.error('Query error:', err);
            res.status(500).json({error:'Error occured'});
        }else{
            console.error('Query success:', result);
            res.status(200).json(result);
        }

    })
});

app.post('/registerClient',(req,res) =>{
    const {name,email,address,password} = req.body;
    const sql = 'insert into client (name, email, address, password) values(?,?,?,?)';
    db.query(sql,[name,email,address,password],(err,result) => {
        if (err){
            console.error('Query error:', err);
            res.status(500).json({error:'Error occured'});
        }else{
            console.error('Query success:', result);
            res.status(200).json({message:'Client Created Successfully'});
        }

    })
});

app.post('/scheduleMeeting',(req,res) =>{
    const {topic,numberofpeople,starttime} = req.body;
    const mysqlDateTime = new Date(starttime)
        .toISOString()
        .slice(0, 19) 
        .replace('T', ' '); 

    const sql = 'insert into meeting_schedule (topic,numberofpeople,starttime) values(?,?,?)';
    db.query(sql,[topic,numberofpeople,mysqlDateTime],(err,result) => {
        if (err){
            console.error('Query error:', err);
            res.status(500).json({error:'Error occured'});
        }else{
            console.error('Query success:', result);
            res.status(200).json({message:'Meeting Schedule Successfully'});
        }

    })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});