import React, { Component, PropTypes } from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import NoPiece from './NoPiece';
import {range} from 'lodash';
import {DragDropContext} from 'react-dnd'
import HTML5Backend from "react-dnd-html5-backend";

@DragDropContext(HTML5Backend)
export default class Board extends Component {

  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  render(){
    const {knightPosition} = this.props;
    return (
      <div style={styles.wrapper}>
        {range(64).map(i => renderSquare(i, ...knightPosition))}
      </div>
    );
  }
}

// (Int,Int,Int) -> Component
const renderSquare = (i,kx,ky) => {
  const [x,y] = [i % 8, Math.floor(i / 8)];
  return (
    <div key={i} style={styles.boardSquare}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x,y,kx,ky)}
      </BoardSquare>
    </div>
  );
};

// (Int,Int,Int,Int) -> Component
const renderPiece = (x,y,kx,ky) => {
  return (x === kx && y === ky) ? <Knight/> : <NoPiece/>;
};

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  boardSquare: {
    width: '12.5%',
    height: '12.5%'
  }
};