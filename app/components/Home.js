var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render(){
    return (
      <div className = 'home-container'>
        <h1>
          Github Battle: Battle your friends....and stuff.
        </h1>
        <Link className='button' to='/battle' >
          Battle
        </Link>
        <p style = {{textAlign: 'center'}}>Made By:  <a href='https://randomThoughts2018.github.io'> Vineet Kumar Singh</a></p>
      </div>
    )
  }
}

module.exports = Home;
