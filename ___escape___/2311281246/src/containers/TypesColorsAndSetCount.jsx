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

  // 入力の状態の変化を親に伝いようとしている？
  // useEffect(() => {
  //   const item = switchItem();
  //   if (item) {
  //     whichItemSumCalcCount(item[0]);
  //   }
  // }, [switchItem, whichItemSumCalcCount]);

  // const handleInputChange = (key, value) => {
  //   setEachCount((prevCounts) => ({ ...prevCounts, [key]: value }));
  // };  

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
                  // ここ
                  // handleInputChange(key, e.target.value)
                  switchItem()[0][key] = e.target.value
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