import "./Product.css"
const Product = (props) => {
  const { product, item, onAdd, onRemove } = props;
  
  return (
    <div className="card" key={product.pid}>
      <div className="frame">
        <img className="image" src={product.image} alt={product.name} />
      </div>
      <div className="item-info">
        <div className="name">{product.name}</div>
        {product.type.length !== 0
          ? 
          <ul className="type">
            {product.type.map((ins, idx) => (<li key={idx}>{ins}</li>))}
          </ul>
          : 
          <ul className="display-none"></ul>
        }
        {product.color.length !== 0 
          ? 
          <ul className="color">
            {product.color.map((ins, idx) => (<li key={idx}>{ins}</li>))}
          </ul>
          : 
          <ul className="display-none"></ul>
        }
        <div className="price">{product.price}<span>円</span></div>
        {item 
          ? (
            <div className="quantity-state">
              <button onClick={() => onRemove(item)} className="remove"><div className="fa-solid fa-square-minus"></div></button>
              <span className="padding-one">{item.quantity}</span>
              <button onClick={() => onAdd(item)} className="add"><div className="fa-solid fa-square-plus"></div></button>
            </div>
          ) : (
            <button className="quantity" onClick={() => onAdd(product)}>カートに追加</button>
          )
        }
      </div>
    </div>
  );
};

export default Product;