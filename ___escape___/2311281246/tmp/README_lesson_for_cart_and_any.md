# react-cart

## lessons

1. create react app
   1. npx create-react-app my-app
   2. remove extra files
      1. App.css
      2. App.test.js
      3. logo.svg
   3. modify App.js
      ```jsx
      function App() {
          return (
            <div className="App">
            </div>
          );
        }
        export default App;
        ```
2. create website layout
   1. add Header, Main and Basket component
   2. Style component
      1. create media query etc
3. create Main component
   1. create data.js
   2. render product items
4. create Product component
   1. create product divs
   2. pass props to product component
5. Implement cart
   1. add and remove items from the cart
6. create basket in cartItems
   1. list items in cartItems
   2. caluculate sub total
   3. show checkout button
7. save cart items in local storage
   1. save items in local storage on add and remove
   2. use useEffect to get items in local storage
8. useTransition and useDeferedValue
   1. read items in local Storage using useTransition
   2. change cartItems.length to transition effect

ver2
type, color それぞれにプラス　マイナスをつける。

ver3
product, cart はそれぞれ別物




// カート内で作るリストの参考になるかな？
// {product.color.length !== 0 
//   ? (
//   <ul className="color">
//     {product.color.map((ins, idx) => (
//       <li key={idx}>
//         {ins}
//         <div className="quantity-state">
//           <button onClick={() => onRemoveCart(onCartItem)} className="remove"><div className="fa-solid fa-square-minus"></div></button>
//             {onCartItem ? <span>{onCartItem.quantity}</span> : <span>0</span>}
//           <button onClick={() => onAddCart(onCartItem)} className="add"><div className="fa-solid fa-square-plus"></div></button>
//         </div>
//       </li>
//     ))}
//   </ul>
//   ) : (
//   <ul className="display-none"></ul>
//   )
// }


// 問題　とりえあえず残しておく
// name, type, colorで場合分けをしないといけないし、
// それぞれにidをつけないといけなくなるはず。
// // 動かない〜！！！！
// const typeHash = (n, arr) => {
//   const keys = [...Array(n)].map((_, i) => i);
//   const hash = [keys, arr].slice(1).map((item) => {
//     let obj = {};
//     keys.forEach((key, idx) => (obj[key] = item[idx]));
//     return obj;
//   });
// };

// typeHash(5, ["apple", "banana"]);
// setThisType(typeHash);

// const colorHash = (n, arr) => {
//   const keyArr = [...Array(n)].map((_, i) => i);
//   const keys = keyArr;
//   const hash = arr.slice(1).map((item) => {
//     let obj = {};
//     keys.forEach((key, idx) => (obj[key] = item[idx]));
//     return obj;
//   });
// };