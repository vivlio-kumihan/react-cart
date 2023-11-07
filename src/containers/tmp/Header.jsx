export default function Header(props) {
  const { countCartItems } = props;
  return (
    <div className="block row center">
      <div>
        <a href="#/">
          <h2>React Cart</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href="#/signin">Sign In</a>
      </div>
    </div>
  );
}
