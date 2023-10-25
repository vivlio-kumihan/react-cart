import "./Product.css"
const Product = (props) => {
  const { product, onCartItem, onAddCart, onRemoveCart } = props;
  
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
        {onCartItem 
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