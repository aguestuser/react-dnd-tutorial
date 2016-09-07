import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {observe} from './state/Game';
import Board from './component/Board';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition}/>,
    rootEl
  )
);