"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    
    render: function(){
        return(
            <div>
                <h1>Page Not Found</h1>
                <p>
                    Woops, page not found.
                </p>
                <p>
                    <Link to="app">Back to home page</Link>
                </p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
