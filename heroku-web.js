var express = require('express');
var app = express();
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(express.static(__dirname + '/dist'));

app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 8000;

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
