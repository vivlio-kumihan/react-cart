const Product = (props) => {
  // 最下層でもプロップスのリレーをやる。
  const { product, item, onAdd, onRemove } = props;
  
  return (
    <>
      <div className="card" key={product.id}>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
        {item 
          ? (
            <div>
              <button onClick={() => onRemove(item)} className="remove">-</button>
              <span className="padding-one">{item.quantity}</span>
              <button onClick={() => onAdd(item)} className="add">+</button>
            </div>
          ) : (
            <button onClick={() => onAdd(product)}>Add to Cart</button>
          )
        }
        </div>
      </div>
    </>
  );
};


export default Product;