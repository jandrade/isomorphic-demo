/** @jsx React.DOM */

var React = require('react/addons'),
	MainApp = require('./components/MainApp');

window.onload = function() {
	var container = document.querySelector('.main-app');
	console.log("document ready container: ", container, container.length);

	React.render(<MainApp name="front end"/>, container);
};