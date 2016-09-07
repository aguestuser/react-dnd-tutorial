import React, { Component, PropTypes } from 'react';
import Square from './Square';
import {moveKnight,canMoveKnight} from '../state/Game';
import {KNIGHT} from "../constant/DragableTypes";
import {DropTarget} from 'react-dnd';

const targetSpec = {
  canDrop: props => canMoveKnight(props.x, props.y),
  drop: props => moveKnight(props.x, props.y),
};

const collect = (connect,monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

@DropTarget(KNIGHT, targetSpec, collect)
export default class BoardSquare extends Component {

  static proptypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  };

  render(){

    const {x,y,connectDropTarget,isOver,canDrop,children} = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={styles.wrapper}>
        <Square black={black}>
          {children}
        </Square>
        {isOver && !canDrop && renderOverlay('red')}
        {!isOver && canDrop && renderOverlay('yellow')}
        {isOver && canDrop && renderOverlay('green')}
      </div>
    );
  }
}

const renderOverlay = (color) =>
  <div style={styles.overlay(color)}></div>;

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  overlay: (color) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: color,
  })
};