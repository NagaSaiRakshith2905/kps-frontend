import React from 'react'
import './CardBorder.css'

const CardBorder = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default CardBorder