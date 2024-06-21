import { useContext, useEffect } from "react"
import { productContext } from "../App"

import Product from "./Product"

function Left() {

  const { products , setProducts , total , setTotal , cart , setCart} = useContext(productContext)

  
  useEffect(()=>{
    let totalAmount = 0;
    if(cart.length > 0){
    cart.forEach((item,index)=>{
     totalAmount += Number(item.price) * Number(item.quantity);
    })
    setTotal(totalAmount);
  }
   },[cart])

   useEffect(()=>{
       let copyArray = [...products];
       setCart(copyArray.filter((item,index)=>{
        return item.quantity > 0;
       }))
   },[products])


  function handleCartRemove(e, id){
    e.preventDefault()
    setProducts(products.filter((prdItem)=>{
       return prdItem.id !== id;
    }))
  }

  function handleDecrement(index){

    let copyCart = [...products];
    
     let count = copyCart[index]["quantity"] 
  
     if(count > 0){
      copyCart[index]["quantity"] -= 1;
     }
     setProducts(copyCart)

     if(count <= 0){
      setProducts(products.filter((cartItem,idx)=>{
        return index !== idx;
      }))
    }
}

function handleIncrement(index){
  let copyCart = [...products];
  copyCart[index]["quantity"] += 1;
  setProducts(copyCart)

}

  return (
   <>
     <div className="left">
       <h2>Product</h2>

       {products.length > 0 ?  products.map((dt,idx)=>{
        return <Product key={idx} image={dt.image} phoneName={dt.phoneName} price={dt.price} id={dt.id} quantity={dt.quantity} 
        handleCartRemove={handleCartRemove} handleDecrement={handleDecrement} handleIncrement={handleIncrement} index={idx}/>
     })   
       : <div className="refresh">No Product is their !! kindly Refresh </div>}
      
     </div>
   </>
  )
}

export default Left