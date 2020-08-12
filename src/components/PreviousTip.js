import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 0%, rgba(1, 31, 128, 1) 100%)",
    padding: 5,
    borderRadius: 50,
    width: "100vmin",
    marginBottom: "5vmin",
    minHeight: 240,
  },
  content: {
    background: "white",
    borderRadius: 48,
    padding: 10,
    minHeight: 230,
  },
});

export const PreviousTip = ({ index = 0, side = 0 }) => {
  const classes = useStyles();
  const topLeftColor = side === 0 ? "#fe006e" : "#fe00ff";
  const bottomRightColor = side === 0 ? "#011f80" : "#011fff";
  return (
    <div
      className={classes.wrapper}
      style={{
        marginLeft: side === 0 ? "10vmin" : "-10vmin",
        background: `repeating-linear-gradient(-35deg, ${bottomRightColor} 0%, ${topLeftColor} 100%)`,
      }}
    >
      <div
        className={classes.content}
        style={{
          paddingLeft: side === 0 ? 20 : 100,
          paddingRight: side === 0 ? 100 : 20,
        }}
      >
        Content al conetn da elk djl ape jkla lkje lahsdn. Content al conetn da
        elk djl ape jkla lkje lahsdn. Content al conetn da elk djl ape jkla lkje
        lahsdn.
      </div>
    </div>
  );
};
