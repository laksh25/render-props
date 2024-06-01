import React from "react";

import classes from "./styles.module.css";

const CounterTwo = ({ ctr, inc }) => {
  return (
    <div>
      <p className={classes.text}>{ctr}</p>
      <div className={classes.container}>
        <button className={classes.btn} onClick={() => inc(1)}>
          +1
        </button>
        <button className={classes.btn} onClick={() => inc(10)}>
          +10
        </button>
        <button className={classes.btn} onClick={() => inc(100)}>
          +100
        </button>
        <button className={classes.btn} onClick={() => inc(1000)}>
          +1000
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
