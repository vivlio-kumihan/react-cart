  const TypesColors = ({types, colors, setEachCount, sumCount }) => {
    const items = [types, colors];

    return (
      <>
        {Object.keys(types).length !== 0 ? (
          <ul className="types">
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
            {sumCount(types)}
          </ul>
        ) : (
          <ul className="display-none"></ul>
        )}

        {Object.keys(colors).length !== 0 ? (
          <ul className="colors">
            {Object.keys(colors).map((key, idx) => (
              <li key={idx}>
                <span>{key}</span>
                <input 
                  id="type"
                  type="number"
                  min="0" 
                  onChange={(e) => {
                    setEachCount(e.target.value)
                    colors[key] = e.target.value
                  }}
                  placeholder="0"
                  // value属性を無しにするとそれぞれカウントできる。
                  // value={typesCount}
                />
              </li>
            ))}
            {sumCount(colors)}
          </ul>
        ) : (
          <ul className="display-none"></ul>
        )}
      </>
    );
  };

  export default TypesColors;

// items.forEach((item) => {
//   <ul className={item.length !== 0 ? `${item}` : "display-none"}>
//     <li>{item}</li>
//     {/* {Object.keys(item).map((key, idx) => (
//       <li key={idx}>
//         <span>{key}</span>
//         <input
//           id={item}
//           type="number"
//           onChange={(e) => {
//             setEachCount(e.target.value);
//             item[key] = e.target.value;
//           }}
//           placeholder="0"
//         />
//       </li>
//     ))}
//     {sumCount(item)} */}
//   </ul>
// })