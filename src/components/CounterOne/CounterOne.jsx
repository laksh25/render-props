import React from "react";

import classes from "./styles.module.css";

const CounterOne = ({ ctr, inc, dec }) => {
  return (
    <div>
      <p className={classes.counter}>{ctr}</p>
      <div className={classes.container}>
        <button className={classes.btn} onClick={() => inc(1)}>
          +
        </button>
        <button className={classes.btn} onClick={() => dec(1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
