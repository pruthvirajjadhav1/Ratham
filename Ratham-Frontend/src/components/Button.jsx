import React from 'react'

const Button = ({label,onClick}) => {
  //console.log(onClick);
  return (
    <button className='button-class' onClick={onClick}>{label}</button>
  )
}

export default Button