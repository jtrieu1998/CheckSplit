const express = require('express');
const bodyParser = require('body-parser') //import body parse
const app = express();
app.use(express.urlencoded({extended:false}))  //needed for body parse
app.use(bodyParser.json())

app.get('/sendpoint', function (req, res) {
 return res.send('Tommy eats poop');
});

app.post('/sendpoint', function (req, res) {    //"sendpoint" referred to in html to reference method 
  var percent = 1 + (parseFloat(req.body.tip) + parseFloat(req.body.tax)) / parseFloat(req.body.total);
  console.log(percent.toString(10).substring(0, 4));
  var d1 = (parseFloat(req.body.d1) * percent).toString(10).substring(0,5);
  var d2 = (parseFloat(req.body.d2) * percent).toString(10).substring(0,5);
  var d3 = (parseFloat(req.body.d3) * percent).toString(10).substring(0,5);
  
  res.send("Diner 1 owes: " + d1 + "\n Diner 2 owes: " + d2 + "\n Diner 3 owes: " + d3);
})

app.listen(process.env.PORT || 8080);