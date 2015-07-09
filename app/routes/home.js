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
	router = express.Router();

/**
 * Routes
 */

/**
 * Index
 *
 * ROUTE: [GET] /
 */
router.get('/', function (req, res) {
	res.render('layout.ejs');
});

module.exports = router;