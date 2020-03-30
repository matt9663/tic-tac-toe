import React from 'react';

const Square = (props) => {
  return (
    <button className='game-button' onClick={() => props.onClick()}>{props.value}</button>
  )
}

export default Square;