import React, { Component, PropTypes } from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import NoPiece from './NoPiece';
import {range} from 'lodash';
import {maybeMoveKnight} from "../state/Game";
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

// (Int,Int,Int) -> Component
const renderSquareOf = (kx,ky) => (i) => {

  const [x,y] = [i % 8, Math.floor(i / 8)];

  return (
    <div key={i}
         style={{width: '12.5%', height: '12.5%'}}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x,y,kx,ky)}
      </BoardSquare>
    </div>
  );
};

const renderPiece = (x,y,kx,ky) =>
  (x === kx && y === ky) ? <Knight/> : <NoPiece/>;