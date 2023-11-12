import { useState } from "react";
import SelectNumber from "../containers/SelectNumber";

import "../styles/components/Product.sass";

const Test = ({ products }) => {
  const [item, setItem] = useState({});
  Object.values(products).map((inputItem) => {
    setItem(inputItem);
  });

  return (
    <>
      hello
    </>
  );
  // const setHash = (hash) => {
  //   // コンソールログで確認した。
  //   // ちゃんとオブジェクトは来ている。
  //   console.log(hash);
  //   // なんでダメなん？
  //   setTypesCountHash({ ...typesCountHash,  hash });
  // };
};
export default Test;