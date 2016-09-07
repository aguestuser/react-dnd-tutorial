import React, {Component,PropTypes} from 'react';
import {KNIGHT} from "../constant/DragableTypes";
import {DragSource} from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

class Knight extends Component {

  render(){
    const {connectDragSource, isDragging} = this.props;
    const style = {
      opacity: isDragging ? 0.5 : 1,
      fontSize: 15,
      fontWeight: 'bold',
      cursor: 'move'
    };
    return connectDragSource(<div style={style}>♘</div>);
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(KNIGHT, knightSource, collect)(Knight);