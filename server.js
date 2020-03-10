const express = require("express");
const axios = require("axios");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
});

app.post("/", function(req, res){
    let country = "Estonia";
    let ddl = req.body.ddl;
    let url = `https://restcountries.eu/rest/v2/name/Estonia?fullText=true`;

    axios.get(url).then(function(response){
        let Name;
        console.log("Server status code " , response.status);
        if(ddl === "ee"){
            Name = response.name;
            console.log(Name);
        }
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});