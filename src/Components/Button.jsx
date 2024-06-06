import React from 'react'
import  './Button.css'

function Button (props) {
  let  {name} = props
  return (
    <div>
        <button>{name}</button>
    </div>
  )
}

export default Button