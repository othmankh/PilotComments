var express = require('express');
var app = express();
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(express.static(__dirname + '/dist'));

/*var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku


// set the view engine to ejs
// app.set('view engine', 'ejs');

app.set('view engine', 'jade');



// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

*/

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});