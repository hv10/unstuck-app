import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stuckbutton: {
    fontSize: "calc(96px + 2vmin)",
    fontFamily: "Courier Prime, monospace",
    padding: "10px 20px",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
  },
});

export const StuckButton = () => {
  const classes = useStyles();
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className={classes.stuckbutton} onClick={handleClick}>
      I am Stuck
    </div>
  );
};
