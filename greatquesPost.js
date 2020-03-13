var mysql=require('mysql');
var inquirer=require("inquirer");
var con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"password",
    database:"greatway_db"
});
con.connect(function(err){
    if(err) throw err;
    function question(){
        inquirer.prompt({
            name:"want to post or bid",
            choices:['bid','post']
        })
    }
} )
