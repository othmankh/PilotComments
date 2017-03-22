var express = require('express');
var app = express();
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(express.static(__dirname + '/dist'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// set the home page route
app.get('/', function(req, res) {
	res.render('index');
});


