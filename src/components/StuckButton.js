import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  stuckButton: {
    fontSize: "min(8rem, 20vmin)",
    fontFamily: "Courier Prime, monospace",
    fontStyle: "italic",
    padding: "10px 20px",
    textDecoration: "none",
    textTransform: "uppercase",
    userSelect: "none",
    color: "white",
    textAlign: "center",
  },
});

export const StuckButton = () => {
  const classes = useStyles();
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className={classes.stuckButton} onClick={handleClick}>
      I am <br />
      Stuck
    </div>
  );
};
