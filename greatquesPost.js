var mysql=require('mysql');
var inquirer=require("inquirer");
const bid = require('bid');
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
            name:"wanttopostorbid",
            choices:['bid','post']
        }).then(function(response){
            if(response.wanttopostorbid==='bid'){
                bid.auctionBid();
            }else{
                postMethod();
            }
        })
    }
} );
function postMethod(){
    inquirer.prompt([
        {
          name:"item",
           type:"input",
           message:"Item you are posting for the biding" 
        }
    ]).then(function(response){
    console.log("Deleting all strawberry icecream...\n"); 
     con.query(
         "INSERT INTO postItem SET",
         {
             name:response.item
         },
         function(err){
             if(err) throw err;
             console.log("POst item set is created.")
         }
     )
    })
    
}

