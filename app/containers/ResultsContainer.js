var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function () {
    var players = this.props.location.state.playersInfo;
    githubHelpers.battle(players)
      .then(function (scores) {
        this.setState({
          scores: scores,
          isLoading: false
        });
      }.bind(this));
  },
  render: function () {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores} />
    )
  }
});

module.exports = ResultsContainer;
