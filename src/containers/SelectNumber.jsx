const SelectNumber = ({ types, selectedNumber, setSelectedNumber }) => {
  // console.log(type, idx)
  // console.log(types)
  // console.log(idx) 
  // console.log(types[idx]) 
  // const hash = {orange: 1, apple: 2};
  // hash.apple = 100;
  // console.log(hash);
  // console.log(selectedNumber);

  return (
    <>
      <input type="number"
        onChange={(e) => {
          console.log(e.target.value)
          setSelectedNumber(e.target.value)
          types.type = selectedNumber
        }}
      />
    </>
  );
};
export default SelectNumber;