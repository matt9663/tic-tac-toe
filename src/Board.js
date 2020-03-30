import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      turn: 'X',
      winner: null,
      xWins: 0,
      oWins: 0,
      draw: false
    }
  }
  toggleTurn() {
    if (this.state.turn === 'X') {
      this.setState({
        turn: 'O'
      })
    } else this.setState({ turn: 'X' })
  }

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      turn: 'X',
      winner: null,
    })
  }

  setSquare(index) {
    const { squares, turn } = this.state;
    if (squares[index] === null) {
      const newSquares = squares;
      newSquares[index] = this.state.turn;
      this.setState({ squares: newSquares })
    }
    if (this.checkWinner(this.state.squares)) {
      this.setState({
        winner: turn,
      })
    } else {
      this.toggleTurn();
    }
  }
  checkWinner(squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        if (squares[a] === 'X') {
          this.setState({
            xWins: this.state.xWins + 1
          })
        } else {
          this.setState({
            oWins: this.state.oWins + 1
          })
        }
        return true;
      } else if (squares.indexOf(null) === -1 ) {
        this.setState({
          draw: true
        })
      } else return false;
    }
  }
  

  render() {
    return (
      <div className='game-board'>
        <header className='header'>
          <h1 className='title'>Tic-Tac-Toe Game</h1>
          <span className='score'>X: {this.state.xWins} O: {this.state.oWins}</span>
        </header>
        <h2 className='turn-order'>Current Player: {this.state.turn}</h2>
        {this.state.winner && <h1>{this.state.winner} is the winner!</h1>}
        {this.state.draw && <h1>It's a draw!</h1>}
        <div className='board-row'>
          <Square value={this.state.squares[0]} onClick={() => this.setSquare(0)} />
          <Square value={this.state.squares[1]} onClick={() => this.setSquare(1)} />
          <Square value={this.state.squares[2]} onClick={() => this.setSquare(2)} />
        </div>
        <div className='board-row'>
          <Square value={this.state.squares[3]} onClick={() => this.setSquare(3)} />
          <Square value={this.state.squares[4]} onClick={() => this.setSquare(4)} />
          <Square value={this.state.squares[5]} onClick={() => this.setSquare(5)} />
        </div>
        <div className='board-row'>
          <Square value={this.state.squares[6]} onClick={() => this.setSquare(6)} />
          <Square value={this.state.squares[7]} onClick={() => this.setSquare(7)} />
          <Square value={this.state.squares[8]} onClick={() => this.setSquare(8)} />
        </div>
        <button className='reset-board' onClick={() => this.resetGame()}>Reset The Board</button>
      </div>
    );
  }
}