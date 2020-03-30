import React from 'react';

const Square = (props) => {
  return (
    <button className='game-button' onClick={() => props.onClick()} disabled={!!props.winner}>{props.value}</button>
  )
}

export default Square;