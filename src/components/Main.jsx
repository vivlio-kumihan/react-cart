import "../styles/components/Main.sass";
import Product from "./Product";
import DeauWa from "../containers/details/DeauWa"
import MoriYa from "../containers/details/MoriYa"
import ThokonMamoriKado from "../containers/details/ThokonMamoriKado"
import WristBand from "../containers/details/WristBand"

const Main = ({ dataList, 
  cartItems, 
  setCartItems, 
  onAddCart, 
  onRemoveCart,
  nameValueZero, 
  hasItem,
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
                nameValueZero={nameValueZero}
                hasItem={hasItem}
              />
            </li>
          ))
        }
      </ul>
      <DeauWa />
      <MoriYa />
      <ThokonMamoriKado />
      <WristBand />
    </div>
  );
};

export default Main;