import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <div>
      hi
      <h3>{props.data.name}</h3>
      <h3>{props.data.town}</h3>
    </div>
  );
};

export default User;
