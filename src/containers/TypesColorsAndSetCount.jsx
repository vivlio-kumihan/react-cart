import { useEffect } from "react";

const TypesColorsAndSetCount = ({ types, colors, setEachCount, whichSumCount }) => {

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
          {/* 問題　渡らないとするとここかも？ */}
          {
            useEffect(() => {
              whichSumCount(types);
            }, [types, whichSumCount])
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
          {/* 問題　渡らないとするとここかも？ */}
          {
            useEffect(() => {
              whichSumCount(colors);
            }, [colors, whichSumCount])
          }
        </ul>
      ) : (
        <ul className="display-none"></ul>
      )}
    </>
  );
};

export default TypesColorsAndSetCount;