import "./Product.css"
const Product = (props) => {
  const { product, item, onAddCart, onRemoveCart } = props;
  
  return (
    <div className="card" key={product.pid}>
      <div className="frame">
        <img className="image" src={product.image} alt={product.name} />
      </div>
      <div className="item-info">
        <div className="name">
          {product.name}
        </div>
        {product.type.length !== 0
          ? 
          <ul className="type">
            {product.type.map((ins, idx) => (
              <li key={idx}>{ins}</li>
            ))}
          </ul>
          : 
          <ul className="display-none"></ul>
        }
        {product.color.length !== 0 
          ? 
          <ul className="color">
            {product.color.map((ins, idx) => (
              <li key={idx}>{ins}</li>
            ))}
          </ul>
          : 
          <ul className="display-none"></ul>
        }
        <div className="price">{product.price}<span>円</span></div>
        {item 
          ? (
            <button 
              className="quantity remove-btn" 
              onClick={() => onRemoveCart(product)}>
              カートから削除
            </button>
          ) : (
            <button 
              className="quantity" 
              onClick={() => onAddCart(product)}>
              カートに追加
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;


// カート内で作るリストの参考になるはず
// {product.color.length !== 0 
//   ? (
//   <ul className="color">
//     {product.color.map((ins, idx) => (
//       <li key={idx}>
//         {ins}
//         <div className="quantity-state">
//           <button onClick={() => onRemoveCart(item)} className="remove"><div className="fa-solid fa-square-minus"></div></button>
//             {item ? <span>{item.quantity}</span> : <span>0</span>}
//           <button onClick={() => onAddCart(item)} className="add"><div className="fa-solid fa-square-plus"></div></button>
//         </div>
//       </li>
//     ))}
//   </ul>
//   ) : (
//   <ul className="display-none"></ul>
//   )
// }