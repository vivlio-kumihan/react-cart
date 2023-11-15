const Profile = ({name, age, hobby}) => {
  return (
    <>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Hobby: 
        <ul>
          {hobby.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </>
  )
};

export default Profile;