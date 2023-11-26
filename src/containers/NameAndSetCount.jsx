import { useEffect } from "react";

const NameAndSetCount = ({ 
  name, 
  types, 
  colors,
  hasItem,
  eachCount,
  setEachCount,
  whichItemSumCalcCount,
  }) => {

  return (
    <ul className="name">
    {
      Object.keys(name).map((key, idx) => (
        (hasItem(types) || hasItem(colors)) ?
        <li key={idx}>
          <div className="item-name">{key}</div>
        </li>
        :
        <li key={idx}>
          <div className="item-name">{key}</div>
          <input 
            id={`${name}_${key}`}
            placeholder="0"
            type="number" 
            min="0"
            value={eachCount[key] || 0}
            onChange={(e) => {
              setEachCount({...name, [key]: e.target.value})              
              name[key] = e.target.value
            }}
          />   
        </li>
      ))}
      {
        useEffect(() => {
          whichItemSumCalcCount(name);
        }, [name, whichItemSumCalcCount])
      }         
    </ul>
  );
};

export default NameAndSetCount;