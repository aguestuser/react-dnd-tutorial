import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Knight from './Knight';
import NoPiece from './NoPiece';
import {range} from 'lodash';

export default class Board extends Component {
  render(){

    const renderSquare = renderSquareOf(...this.props.knightPosition);

    const style = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    };

    return (
      <div style={style}>
        {range(64).map(i => renderSquare(i))}
      </div>
    );
  }
}

// (Int,Int) -> (Int) -> Component
const renderSquareOf = (kx,ky) => (i) => {
  const [x,y] = [i % 8, Math.floor(i / 8)];
  const black = (x + y) % 2 === 1;
  const piece = (x === kx && y === ky) ? <Knight/> : <NoPiece/>;

  return (
    <div key={i}
         style={{width: '12.5%', height: '12.5%'}}>
      <Square black={black}>
        {piece}
      </Square>
    </div>
  );
};


Board.PropTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};