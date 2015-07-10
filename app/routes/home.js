/** @jsx React.DOM */
/**
 * @fileOverview Main Router
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 */
'use strict';

/**
 * Imports
 */
var express = require('express'),
	router = express.Router(),
	React = require('react/addons'),
	MainApp = React.createFactory(require('../components/MainApp'));

/**
 * Routes
 */

/**
 * Index
 *
 * ROUTE: [GET] /
 */
router.get('/', function (req, res) {
	

	var output = React.renderToString(MainApp({name: "John"}));

	res.render('layout.ejs', {output: output});
});

module.exports = router;