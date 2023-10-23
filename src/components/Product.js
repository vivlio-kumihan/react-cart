import "./Product.css"
const Product = (props) => {
  const { product, item, onAdd, onRemove } = props;
  
  return (
    <div className="card">
      <div className="frame">
        <img className="image" src={product.image} alt={product.name} key={product.image} />
      </div>
      <div className="item-info">
        <div className="name" key={product.name}>{product.name}</div>
        {product.type.length !== 0
          ? 
          <ul className="type" key={product.type}>
            {product.type.map((ins, idx) => (<li key={idx}>{ins}</li>))}
          </ul>
          : 
          <ul className="display-none"></ul>
        }
        {product.color.length !== 0 
          ? 
          <ul className="color" key={product.color}>
            {product.color.map((ins, idx) => (<li key={idx}>{ins}</li>))}
          </ul>
          : 
          <ul className="display-none"></ul>
        }
        <div className="price" key={product.pid}>{product.price}<span>円</span></div>
        <div className="quantity">
          {item 
            ? (
              <div>
                <button onClick={() => onRemove(item)} className="remove">-</button>
                <span className="padding-one">{item.quantity}</span>
                <button onClick={() => onAdd(item)} className="add">+</button>
              </div>
            ) : (
              <button onClick={() => onAdd(product)}>カートに追加</button>
            )
          }
        </div>
      </div>
    </div>
  );
};


export default Product;