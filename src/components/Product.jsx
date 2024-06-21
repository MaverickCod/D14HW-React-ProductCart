import { IoIosAdd, IoIosRemove } from "react-icons/io";


function Product({image,phoneName,price,id,quantity,handleCartRemove,handleIncrement,handleDecrement,index}) {
  return (
    <>
          <div className="item-container">
        <div className="items">
          <div className="img">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="phone-details">
            <h4>{phoneName}</h4>
            <p>$ {price}</p>
            <a href="" onClick={(e)=>{handleCartRemove(e,id)}}>remove</a>
          </div>
        </div>

        <div className="counter">
          <IoIosRemove  style={{"fontSize":"18px","cursor":"pointer"}} onClick={()=>handleDecrement(index)} />
          <span>{quantity}</span>
          <IoIosAdd style={{"fontSize":"18px","cursor":"pointer"}} onClick={()=>{handleIncrement(index)}}/>
        </div>
      </div>
    </>
  )
}

export default Product