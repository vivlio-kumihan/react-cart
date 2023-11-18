import { useEffect, useState } from "react";
import "../styles/components/Main.sass";
import Product from "./Product";

const Main = ({ dataList, cartItems, setCartItems, onAddCart, onRemoveCart }) => {
  console.log(dataList);
  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <ul className="data-wrapper">
        {
          dataList.map((data) => (
            <li key={data.pid}>
              <Product 
                {...data}
                data={data}
                cartItems={cartItems}
                setCartItems={setCartItems}
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

  // 問題　なんでuseEffectにしないとダメなのか？
  // Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // Uncaught Error： 再レンダリングの回数が多すぎます。Reactは無限ループを防ぐためにレンダリング回数を制限しています。
  // const handleItemsTotalFeeHash = (id, fee) => {
  //   setItemsTotalFeeHash({ ...itemsTotalFeeHash, [id]: fee});
  //   // useEffect(() => {
  //   // });
  // };
  // const [itemsTotalWeightHash, setItemsTotalWeightHash] = useState({});