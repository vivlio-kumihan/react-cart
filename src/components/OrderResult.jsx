import CartItem from "./CartItem";
const OrderResult = ({ toggle, cartItems }) => {
  // 課題2、3については手を付けられていない。
  // 課題 2
  // それぞれのstateでカウントを取れるようになったうえで、
  // 品名とその種類または色に紐づいた数量をもって購入商品の合計を表示させる。
  // いずれかの状態の合計を算出させる。
  //   商品名 × 単価 × 数量 ＝ 料金
  //   種類 × 単価 × 数量 ＝ 料金
  //   色 × 単価 × 数量 ＝ 料金

  // 課題 3
  // 『送料』を表示させる。
  //   送料
  //     種類 重量 × 数量
  //     色 重量 × 数量
  // formで全国の都道府県のリスト作成。
  // 都道府県ごとに係数をかけるとか？参考資料を集める。
  // const shippingTable = {
  //   100: {"京都": 1, "大阪": 1, "兵庫": 1, "奈良": 1, ...},
  // };

  // const itemsPrice = cartItems.reduce((sum, item) => sum + order.count * item.price, 0);
  // const taxPrice = itemsPrice * 0.1;
  // const totalPrice = itemsPrice + taxPrice;

  const isEmpty = (arr) => arr.length < 1;

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {isEmpty(cartItems) && (
        <div className="default-msg">登録された商品はありません。</div>
      )}

      {cartItems.map((cartItem, idx) => (
        <CartItem cartItem={cartItem} key={idx} />
      ))}
      {/* 課題 2 の関係箇所 */}
      {/* {cartItems.length !== 0 && (
        <ul className="calc-amount">
          <li>商品小計<span>{Math.round(itemsPrice)}</span>円</li>
          <li>消費税 <span>{Math.round(taxPrice)}</span>円</li>
          <li>合計<span>{Math.round(totalPrice)}</span>円</li>
          <li>
            <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
          </li>
        </ul>
      )} */}
    </div>
  );
};

export default OrderResult;
