import { useEffect, useState } from "react";
import "../styles/components/Main.sass";
import Product from "./Product";

const Main = ({ dataList, 
  cartItems, 
  setCartItems, 
  onAddCart, 
  onRemoveCart, 
  minusFee,
  setMinusFee
  }) => {

  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <ul className="data-wrapper">
        {
          dataList.map((data) => (
            <li key={data.pid}>
              <Product 
                data={data}
                {...data}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart} 
                minusFee={minusFee}
                setMinusFee={setMinusFee}                  
              />
            </li>
          ))
        }
      </ul>  
    </div>
  );
};

export default Main;