import React from "react";
import { createUseStyles } from "react-jss";
import { PreviousTip } from "./PreviousTip";

const useStyles = createUseStyles({
  tippsSection: {
    minHeight: "100vh",
    scrollSnapAlign: "start",
  },
  title: {
    fontSize: "calc(48px + 2vmin)",
    fontFamily: "Courier Prime, monospace",
    userSelect: "none",
    color: "white",
    margin: 0,
    padding: 0,
    textAlign: "left",
    paddingLeft: "min(2em, 2vmin)",
    paddingTop: "min(0.5em, 2vmin)",
  },
});

export const LastTips = () => {
  const classes = useStyles();
  return (
    <div className={classes.tippsSection}>
      <h1 className={classes.title}>Last.Tipps</h1>
      {[...Array(2)].map((v, i) => (
        <PreviousTip key={i} side={i % 2} />
      ))}
    </div>
  );
};
