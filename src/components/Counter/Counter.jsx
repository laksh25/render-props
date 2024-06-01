import React, { useState } from "react";

const Counter = ({ render }) => {
  const [ctr, setCtr] = useState(1);

  const inc = (incrementBy) => {
    setCtr((prev) => prev + incrementBy);
  };

  const dec = (decrementBy) => {
    setCtr((prev) => prev - decrementBy);
  };

  return <>{render(ctr, inc, dec)}</>;
};

export default Counter;
