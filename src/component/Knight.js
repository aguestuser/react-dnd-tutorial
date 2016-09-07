import React, {Component,PropTypes} from 'react';
import {KNIGHT} from "../constant/DragableTypes";
import {DragSource} from 'react-dnd';

const sourceSpec = {
  beginDrag: props => ({})
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

@DragSource(KNIGHT, sourceSpec, collect)
export default class Knight extends Component {

  static propTypes = {
    connectDragSource: PropTypes.func,
    isDragging: PropTypes.bool
  };

  render(){
    const {connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <div style={style(isDragging)}>♘</div>
    );
  }
}

const style = (isDragging) => ({
  opacity: isDragging ? 0.5 : 1,
  fontSize: 15,
  fontWeight: 'bold',
  cursor: 'move'
});