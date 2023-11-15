import { useEffect } from "react";

const NameAndSetCount = ({ name, types, colors, setEachCount }) => {
  const hasItems = (hash) => Object.keys(hash).length > 0;

  return (
    <ul className="name">
    {
      Object.keys(name).map((key, idx) => (
        (hasItems(types) || hasItems(colors)) ?
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
              setEachCount(e.target.value)
              name[key] = e.target.value
            }}
            placeholder="0"
          />   
        </li>
      ))}   
    </ul>
  );
};

export default NameAndSetCount;