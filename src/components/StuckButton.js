import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  stuckbutton: {
    fontSize: "calc(96px + 2vmin)",
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
    <div className={classes.stuckbutton} onClick={handleClick}>
      I am <br />
      Stuck
    </div>
  );
};
