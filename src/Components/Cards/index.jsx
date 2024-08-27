import React from 'react'
import './index.css'
import Button from '../Button/index'

function Cards(props) {
    const {price, name, img} = props
  return (
    <>
        <div className='product-card'>
            <div className='card-top'>
                <img src={img} />
                <div style={{display:'block'}}>
                    <h1>{name}</h1>
                    <p><b>Rs.</b>{price}</p>
                </div>
            </div>
            <div className='card-bottom'>
                <Button name='Add to Cart' backcolor='#B2FEFAA3' padding='8px 32px' fontsize='18px' radius='12px' />
            </div>
        </div>
    </>
  )
}

export default Cards