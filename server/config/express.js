var express = require('express');
var load = require('express-load');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();

	app.set('clientPath', path.join(__dirname, '../..', 'client'));
	app.use(express.static(app.get('clientPath')));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	/*app.all('*', (req,res) => {
  		console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
  		res.status(200).sendFile(path.join(app.get('clientPath'), 'index.html'));
	});*/

	load('routes',{cwd: 'app'})
		.into(app);

	return app;
}