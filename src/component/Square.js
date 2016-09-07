import React, { Component, PropTypes } from 'react';

export default class Square extends Component {

  static proptypes = {
    black: PropTypes.bool
  };

  render(){
    return (
      <div style={style(this.props.black)}>
        {this.props.children}
      </div>
    )
  }
}

const style = (black) => ({
  backgroundColor: black ? 'black' : 'white',
  color: black ? 'white' : 'black',
  width: '100%',
  height: '100%',
  flexGrow: 1
});