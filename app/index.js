var React = require('react');
var ReactDom = require('react-dom');

var USER_DATA = {
  name: 'Junyuan Xue',
  username: 'junyuanxue',
  image: 'https://avatars1.githubusercontent.com/u/16904324?v=3&s=460'
};

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100}} />
  }
});

var Link = React.createClass({
  changeURL: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span
        style={{color: 'red', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'http://www.github.com/' + this.props.username} >
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div> {this.props.name} </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
