var express = require('express');
 
var app = express();
var calc = 5;
app.get('/', function (req, res) {
 res.send('Welcome To The Very  Personal Web Application ! Thanks for taking part in this Video :-)' + "</br>" + 'The result of 1+1 is: ' + calc);
});
app.listen(process.env.PORT || 3000);
 
module.exports = app;
