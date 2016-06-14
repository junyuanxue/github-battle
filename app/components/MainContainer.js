var React = require('react');
var styles = require('../styles');

function MainContainer () {
  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      {props.childen}
    </div>
  )
};

module.exports = MainContainer;
