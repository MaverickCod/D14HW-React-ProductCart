import React, { useContext } from 'react';
import { productContext } from '../App';
import CartItem from "./CartItem";

function Right() {
  const {cart , setCart , total } = useContext(productContext);


  return (
   <>
    <div className="right">
    <h2>Cart</h2>
     

     {cart.length > 0 ? 
     (<div className="cart-container">
      <div className="carts">
        {cart.map((item,index)=>{
          return <CartItem key={index} item={item}/>
        })}
     
      </div>
      
      <div className="total-container">
        <p>Total : </p>
        <p> $ {total.toFixed(2)}  </p>
      </div>
     </div>)

     : <div className='refresh-card'>Card is Empty !!!</div>
     }
    </div>
   </>
  )
}

export default Right