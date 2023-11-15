import { useEffect } from "react";

const NameAndSetCount = ({ name, setEachCount }) => {
  const hasItems = (hash) => Object.keys(hash).length > 0;

  return (
    <>
      <ul className="name">
        {Object.keys(name).map((key, idx) => (
          <li key={idx}>
            <span>{key}</span>
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
      {/* {
        Object.keys(name).length !== 0 ? (
        <ul className="name">
          {Object.keys(types).map((key, idx) => (
            <li key={idx}>
              <span>{key}</span>
              <input 
                id="type"
                type="number" 
                min="0"
                onChange={(e) => {
                  setEachCount(e.target.value)
                  types[key] = e.target.value
                }}
                placeholder="0"
                // value属性を無しにするとそれぞれカウントできる。
                // value={typesCount}
              />
            </li>
          ))}     
        </ul>
      ) : (
        <div className="name">{name}</div>
      )} */}

    </>
  );
};

export default NameAndSetCount;