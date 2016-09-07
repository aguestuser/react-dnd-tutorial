import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render(){
    const {black} = this.props;
    const style = {
      backgroundColor: black ? 'black' : 'white',
      color: black ? 'white' : 'black',
      width: '100%',
      height: '100%',
      flexGrow: 1
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

Square.propTypes = {
  black: PropTypes.bool
};