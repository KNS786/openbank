var express=require('express');
var mysql=require('mysql2');


var mysqlConnection=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'password',
    database:'bank',
    multipleStatements:true
});

mysqlConnection.connect(function(err){
    if(err) throw err;
    else console.log("mysql conncted");
});

module.exports=mysqlConnection;
