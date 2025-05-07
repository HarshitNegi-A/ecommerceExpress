const express=require('express')
const app=express()
const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Harshit@123',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Connection has been created...")

    const creationQuery=`create table students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(20),
    email varchar(20)
    )`

    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err)
            connection.end()
        }
        console.log("Table is created")
    })

})

app.get('/',(req,res)=>{
    res.send("Hello World!")
})


app.listen(3000,()=>console.log("Server is running now..."))