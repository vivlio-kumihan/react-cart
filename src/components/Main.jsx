import { useEffect, useState } from "react";
import "../styles/components/Main.sass";
import Product from "./Product";

const Main = ({ dataList, cartItems, onAddCart, onRemoveCart }) => {
  const [itemsTotalFee, setItemsTotalFee] = useState(0);
  const [itemsTotalWeight, setItemsTotalWeight] = useState(0);

  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <ul className="data-wrapper">
        {
          dataList.map((data) => (
            <li key={data.pid}>
              <Product {...data}
                data={data}
                itemsTotalFee={itemsTotalFee}
                setItemsTotalFee={setItemsTotalFee}
                itemsTotalWeight={itemsTotalWeight}
                setItemsTotalWeight={setItemsTotalWeight}
                cartItems={cartItems}
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


  // Object.keys(data).forEach(elem => {
  //   console.log(data[elem].name);
  // });
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   const newData = Object.keys(data).map(elem => (
  //     { ...data[elem] }
  //   ));
  //   setItems(newData);
  // }, [data]);
      // {
      //   {/* Object.keys(data).map((key, idx) => {
      //     <Product key={idx}
      //       item={{...data[key]}} 
      //       cartItems={cartItems}
      //       onAddCart={onAddCart}
      //       onRemoveCart={onRemoveCart}            
      //     />
      //   }) */}
      // }
        // <Product
        //   data={data}
        //   cartItems={cartItems}
        //   onAddCart={onAddCart}
        //   onRemoveCart={onRemoveCart}
        // />

          // console.log(elem);
  // console.log(data[elem]);
  // const { pid, name, types, colors, price, weight } = { ...data[elem]};
  // console.log(editableData.pid);
  // console.log(editableData.name);
  // console.log(editableData.types);
  // console.log(editableData.colors);
  // console.log(editableData.price);
  // console.log(editableData.weight);

  //   const hash = { x: 1, y: 2, z: 3 };
  // // hash.x = 100;
  // const newHash = { ...hash };
  // newHash.x = 100000;
  // console.log(hash.x);
  // console.log(hash.y);
  // console.log(hash.z);
  // console.log(newHash.x);