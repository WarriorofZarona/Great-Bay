var mysql=require('mysql');
var inquirer=require("inquirer");
var con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"password",
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected to the database");
    con.query("CREATE DATABASE greatway_db",function(err,result){
     if(err){
         throw err;
     }else{
         console.log("Database is created");
     }
    });
});
