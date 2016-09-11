const express = require("express");
const app = express(), port = 8080;

app.get('/', function(req, res){
   res.send("Hey now!!");
});



app.listen(port, function(){
   console.log("App is listening on port: " + port || process.env.PORT);
});