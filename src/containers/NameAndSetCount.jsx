import { useEffect } from "react";

const NameAndSetCount = ({ 
  name, 
  types, 
  colors, 
  hasItem,
  setEachCount,
  whichItemSumCalcCount
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
            id="name"
            type="number" 
            min="0"
            onChange={(e) => {
              setEachCount({...name, [key]: e.target.value})              
              name[key] = e.target.value
            }}
            placeholder="0"
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