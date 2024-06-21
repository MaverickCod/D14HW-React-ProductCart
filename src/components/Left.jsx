import { useContext, useEffect } from "react";
import { productContext } from "../App";
import Product from "./Product";

function Left() {
  const { products, setProducts, total, setTotal, cart, setCart } = useContext(productContext);

  useEffect(() => {
    let totalAmount = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        totalAmount += Number(item.price) * Number(item.quantity);
      });
      setTotal(totalAmount);
    }
  }, [cart, setTotal]);

  useEffect(() => {
    const copyArray = [...products];
    setCart(copyArray.filter((item) => item.quantity > 0));
  }, [products, setCart]);

  function handleCartRemove(e, id) {
    e.preventDefault();
    setProducts(products.filter((prdItem) => prdItem.id !== id));
  }

  function handleDecrement(index) {
    const copyProducts = [...products];
    let count = copyProducts[index].quantity;

    if (count > 0) {
      copyProducts[index].quantity -= 1;
      setProducts(copyProducts);

      if (count <= 1) {
        setProducts(products.filter((_, idx) => index !== idx));
      }
    }
  }

  function handleIncrement(index) {
    const copyProducts = [...products];
    copyProducts[index].quantity += 1;
    setProducts(copyProducts);
  }

  return (
    <div className="left">
      <h2>Product</h2>
      {products.length > 0 ? (
        products.map((dt) => (
          <Product
            key={dt.id}
            image={dt.image}
            phoneName={dt.phoneName}
            price={dt.price}
            id={dt.id}
            quantity={dt.quantity}
            handleCartRemove={handleCartRemove}
            handleDecrement={() => handleDecrement(dt.id)}
            handleIncrement={() => handleIncrement(dt.id)}
          />
        ))
      ) : (
        <div className="refresh">No Product is there!! Kindly Refresh</div>
      )}
    </div>
  );
}

export default Left;
