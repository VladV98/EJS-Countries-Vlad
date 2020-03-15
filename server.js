const express = require('express');
// const expressLayouts = require("express-ejs-layouts");
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/', function(req, res){
  res.render('index');
});

app.post('', function(req, res){
    let choice = req.body.ddl;
    url = `https://restcountries.eu/rest/v2/name/${choice}?fullText=true`;
  request(url, function(error, response, body){
    let data = JSON.parse(response.body);
    if(choice === 'ee'){
      res.render('result', {
        country : data[0].name,
        level : data[0].topLevelDomain[0],
        callingCode : data[0].callingCodes[0],
        capital : data[0].capital,
        region : data[0].region,
        subregion : data[0].subregion,
        population : data[0].population,
        timezone : data[0].timezones[0],
        language : data[0].altSpellings[2],
        currency1 : data[0].currencies[0].code,
        currency2 : data[0].currencies[0].name,
        currency3 : data[0].currencies[0].symbol,
        flag : data[0].flag
      });
    }
    else if(choice === 'lv'){
      res.render('result', {
        country : data[0].name,
        level : data[0].topLevelDomain[0],
        callingCode : data[0].callingCodes[0],
        capital : data[0].capital,
        region : data[0].region,
        subregion : data[0].subregion,
        population : data[0].population,
        timezone : data[0].timezones[0],
        language : data[0].altSpellings[2],
        currency1 : data[0].currencies[0].code,
        currency2 : data[0].currencies[0].name,
        currency3 : data[0].currencies[0].symbol,
        flag : data[0].flag
      });
    }
    else if(choice === 'lt'){
      res.render('result', {
        country : data[0].name,
        level : data[0].topLevelDomain[0],
        callingCode : data[0].callingCodes[0],
        capital : data[0].capital,
        region : data[0].region,
        subregion : data[0].subregion,
        population : data[0].population,
        timezone : data[0].timezones[0],
        language : data[0].altSpellings[2],
        currency1 : data[0].currencies[0].code,
        currency2 : data[0].currencies[0].name,
        currency3 : data[0].currencies[0].symbol,
        flag : data[0].flag
      });
    }
  });
});
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
