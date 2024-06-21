import React from 'react'

export const CartItem = ({item}) => {
  return (
    <div>
        <div className='cart-item'>
            <img src="{item.image}" alt="" />
            <p>{item.phoneName}</p>
        </div>
        <div className='cart-quantity'>
            <p>{item.quantity}</p>
            <span>{item.price}</span>
        </div>
    </div>
  )
}

export default CartItem