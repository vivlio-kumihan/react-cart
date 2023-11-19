import { useEffect } from "react";

const TypesColorsAndSetCount = ({ 
  types, 
  colors, 
  setEachCount, 
  whichItemSumCalcCount
  }) => {

  return (
    <>
      {
        Object.keys(types).length !== 0 ? (
        <ul className="types">
          {Object.keys(types).map((key, idx) => (
            <li key={idx}>
              <span>{key}</span>
              <input 
                id="types"
                type="number" 
                min="0"
                onChange={(e) => {
                  types[key] = e.target.value
                  setEachCount({...types, [key]: e.target.value})
                }}
                placeholder="0"
                // value属性を無しにするとそれぞれカウントできる。
                // value={typesCount}
              />
            </li>
          ))}
          {
            useEffect(() => {
              whichItemSumCalcCount(types);
            }, [types, whichItemSumCalcCount])
          }          
        </ul>
      ) : (
        <ul className="display-none"></ul>
      )}

      {Object.keys(colors).length !== 0 ? (
        <ul className="colors">
          {
            Object.keys(colors).map((key, idx) => (
            <li key={idx}>
              <span>{key}</span>
              <input 
                id="colors"
                type="number"
                min="0" 
                onChange={(e) => {
                  colors[key] = e.target.value
                  setEachCount({...colors, [key]: e.target.value})                  
                }}
                placeholder="0"
                // きっかけは、『たまたま』
                // value属性を無しにするとそれぞれカウント
                // できることを見つけたことだった。ラッキーだった。
                // value={typesCount}
              />
            </li>
          ))}
          {
            useEffect(() => {
              whichItemSumCalcCount(colors);
            }, [colors, whichItemSumCalcCount])
          }
        </ul>
      ) : (
        <ul className="display-none"></ul>
      )}
    </>
  );
};

export default TypesColorsAndSetCount;