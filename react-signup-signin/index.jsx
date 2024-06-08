var express = require('express')

var app = express();

app.get("/getCities", (req,res)=>{
    res.send("Hello Worldc!");
})




app.listen(4000);