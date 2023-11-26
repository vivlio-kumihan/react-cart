import { useEffect, useState } from "react";
import "../styles/components/Main.sass";
import Product from "./Product";

const Main = ({ dataList, 
  cartItems, 
  setCartItems, 
  calcSubTotalCount,
  setCalcSubTotalCount,
  handleCalcSubTotalCount,
  onAddCart, 
  onRemoveCart, 
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
                calcSubTotalCount={calcSubTotalCount}
                setCalcSubTotalCount={setCalcSubTotalCount}
                handleCalcSubTotalCount={handleCalcSubTotalCount}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}  
              />
            </li>
          ))
        }
      </ul>  
    </div>
  );
};

export default Main;