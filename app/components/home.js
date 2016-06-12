var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1> Github Battle </h1>
        <p className='lead'> Are you a coder, or are you a snoozer? </p>
        <Link to='/playerOne'>
          <button className='btn btn-large btn-success'> Get Started </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
