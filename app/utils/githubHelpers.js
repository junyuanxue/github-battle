var axios = require('axios');

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}

function getTotalStars (stars) {
  //calculate all teh stars that the user has
}

function getPlayersData (player) {
  //get Repos
  //getTotalStars
  //return object with that data
}

function calculateScores (players) {
  //return an array, after fancy algorithms to determine a winner
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (error) {
      console.warn('Error in getPlayersInfo', error);
    });
  },
  battle: function (players) {

  }
};

module.exports = helpers;
