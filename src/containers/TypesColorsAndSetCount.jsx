import { useEffect } from "react";

const TypesColorsAndSetCount = ({ 
  name,
  types, 
  colors, 
  subTotalCount,
  calcSubTotalCount,
  setCalcSubTotalCount,
  handleCalcSubTotalCount,
  eachCount, 
  setEachCount, 
  hasItem,
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
                value={eachCount[key] || 0}
                onChange={(e)=>{
                  setEachCount({...switchItem()[0], [key]: e.target.value})
                  switchItem()[0][key] = e.target.value
                  setCalcSubTotalCount(switchItem()[0])
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