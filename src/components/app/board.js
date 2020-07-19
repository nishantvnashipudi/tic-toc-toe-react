import React, {useEffect} from 'react';
import Box from './box';
import '../css/board.css'
import {isAllBoxesAreFilled, findWinner} from '../utils/util';
import Popup from './show-popup';

class Board extends React.Component {
constructor(props){
  super(props);
  this.state = {
    boxes: Array(9).fill(null),
    xTurn: true,
    showPopup: false
  }
}
handleClick (box, index){
 if(!box){
  let {boxes, xTurn} = this.state;
  boxes[index] = xTurn ? 'X': 'O';
  this.setState({boxes: [...boxes], xTurn: !xTurn});
 } return;
}
handleRestart = () =>{
  let boxes = Array(9).fill(null);
  this.setState({boxes: [...boxes], xTurn: true, showPopup: false});
};
togglePopup() {
  this.handleRestart();
}
componentDidUpdate(prevProps, prevState) {
  if(this.state.boxes !== prevState.boxes){
    let winner = findWinner(this.state.boxes);
    if(winner){
      this.setState({showPopup: true, text: `${winner} won the game.`});
    } if(isAllBoxesAreFilled(this.state.boxes) && !winner){
      this.setState({showPopup: true, text: `Its draw`});
   }
  }
}
render(){
  return (
    <>
    <h1 className='tittle'>Tic Tac Toe</h1>
    <div className='actions'>
    <span className='turn-label'>{this.state.xTurn ? 'X turn' : 'O turn'}</span>
    <button onClick={this.handleRestart} className='restart-btn' key={'restart-btn'}>Restart</button>
    </div>
    <div className='board'>
  {this.state.boxes.map((box, index) => {
    return <Box className="board-item" keys={index} value={box} 
    onClick={() => this.handleClick(box, index)}/>
  })}
    </div>
    {this.state.showPopup ? 
          <Popup
            text={this.state.text}
            closePopup={this.togglePopup.bind(this)}
            restart={this.handleRestart}
          />
          : null
        }
    </>
  );
}
}

export default Board;
