# react-cart

## lessons

1. create react app
   1. npx create-react-app
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