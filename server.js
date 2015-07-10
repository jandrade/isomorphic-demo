/**
 * @fileOverview Back end server
 *
 * @description Isomorphic app demo
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 */

/**
 * Imports
 */
// Make sure to include the JSX transpiler
require("node-jsx").install();

var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	router = require('./app/routes/home'),
/**
 * Server variables
 */
	app = express(),
	server,
	port = process.env.PORT || 4000;

// configure express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// include static assets
app.use(express.static(__dirname + '/assets'));

// configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// register routes
app.use('/', router);

/**
 * Server started correctly
 */
function started() {
	console.log('Isomorphic app listening at http://%s:%s', server.address().address, server.address().port);
}

// start server
server = app.listen(port, started);