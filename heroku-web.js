var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist'));

app.set('view engine', 'ejs');

var port = process.env.PORT || 443;
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});


