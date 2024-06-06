import React from 'react'


function Input(props) {
  const {holder, type} = props;
  return (
    <div>
        <input type={type} placeholder={holder}/>
    </div>
  )
}

export default Input