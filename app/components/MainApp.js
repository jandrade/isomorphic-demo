/** @jsx React.DOM */
var React = require('react/addons');

var MainApp = React.createClass({
	render: function() {
		return (
			<div>Hello {this.props.name}</div>
		);
	}
});

module.exports = MainApp;