import { useEffect } from "react";

const TypesColorsAndSetCount = ({ 
  types, 
  colors, 
  setEachCount, 
  hasItem,
  switchItem,
  whichItemSumCalcCount,
  }) => {

  return (
    <>
    {
      hasItem(types) || hasItem(colors)
        ? (
          <ul className={switchItem[1]}>
          {Object.keys(switchItem[0]).map((key, idx) => (
            <li key={idx}>
              <span>{key}</span>
              <input 
                id={switchItem[1]}
                type="number" 
                min="0"
                onChange={(e)=>{
                  switchItem[0][key] = e.target.value
                  setEachCount({...switchItem[0], [key]: e.target.value})
                }}
                placeholder="0"
                // value属性を無しにするとそれぞれカウントできる。
                // value={typeCount}
              />
            </li>
          ))}
          {
            useEffect(() => {
              whichItemSumCalcCount(switchItem[0]);
            }, [switchItem[0], whichItemSumCalcCount])
          }          
          </ul>
        )
        : (<ul className="display-none"></ul>)
    }
    </>
  );
};

export default TypesColorsAndSetCount;