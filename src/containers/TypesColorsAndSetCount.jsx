import { useEffect } from "react";

const TypesColorsAndSetCount = ({ 
  types, 
  colors, 
  hasItem,
  eachCount, 
  setEachCount, 
  whichItemSumCalcCount,
  }) => {

  const switchItem = () => {
    if (hasItem(types)) {
      return [types, "types"];
    } else if (hasItem(colors)) {
      return [colors, "colors"];
    }
  };  

  return (
    <>
    {
      hasItem(types) || hasItem(colors)
        ? (
          <ul className={switchItem()[1]}>
          {Object.keys(switchItem()[0]).map((key, idx) => (
            <li key={idx}>
              <span>{key}</span>
              <input 
                id={`${switchItem()[1]}_${key}`}
                placeholder="0"
                type="number" 
                min="0"
                // value={eachCount[key] || 0}
                value={eachCount[key]}
                onChange={(e)=>{
                  switchItem()[0][key] = e.target.value
                  setEachCount({...switchItem()[0], [key]: e.target.value})
                }}
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