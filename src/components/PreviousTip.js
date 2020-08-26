import React from "react";
import { createUseStyles } from "react-jss";
import { cat1br, cat1tl, cat2br, cat2tl } from "../constants/colors";
import { Link } from "react-router-dom";
import { parseContent } from "../utils/tipParsing";

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
    color: "black",
  },
});

export const PreviousTip = ({ index = 0, side = 0 }) => {
  const classes = useStyles();
  const topLeftColor = side === 0 ? cat1tl : cat2tl;
  const bottomRightColor = side === 0 ? cat1br : cat2br;
  return (
    <div
      className={classes.wrapper}
      style={{
        marginLeft: side === 0 ? "10vmin" : "-10vmin",
        background: `repeating-linear-gradient(-35deg, ${bottomRightColor} 0%, ${topLeftColor} 100%)`,
      }}
    >
      <Link
        to={"/tip/diverse/1-walk-in-nature"}
        style={{ textDecoration: "none" }}
      >
        <div
          className={classes.content}
          style={{
            paddingLeft: side === 0 ? 20 : 100,
            paddingRight: side === 0 ? 100 : 20,
          }}
        >
          Diversification Tip #1:
          <br /> <strong>Take a Walk in Nature</strong>
        </div>
      </Link>
    </div>
  );
};
