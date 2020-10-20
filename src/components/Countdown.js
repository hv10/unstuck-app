import React from "react";
import Measure from "react-measure";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { cat1tl } from "../constants/colors";
import { useSpring, animated } from "react-spring";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    minHeight: "95vh",
    minWidth: "95vw",
  },
  progress: {
    zIndex: -1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: cat1tl,
    transition: "0.4s ease-in-out clip-path",
    clipPath: "url(#clipCountdown)",
  },
  holder: {
    top: 5,
    left: 5,
    width: "calc(100% - 10px)",
    height: "calc(100% - 10px)",
    position: "absolute",
    transition: "ease-in",
  },
});

export const Countdown = ({ progress = 0, thickness = 0.05 }, props) => {
  const [dimensions, setDimensions] = React.useState({ width: -1, height: -1 });
  const classes = useStyles();
  const toMiddle = (x, y, p) => {
    const aspect = dimensions.width / dimensions.height;
    let r_x = x + p * (0.5 - x);
    let r_y = y + aspect * p * (0.5 - y);
    return [r_x, r_y];
  };
  const line = (x, y) => `L ${x} ${y}`;
  const getClipPath = (progress) => {
    let val = ["M 0.5 0"];
    let end = [line(...toMiddle(0.5, 0, thickness)), " Z"];
    let rev = [];
    const angle = progress * 2 * Math.PI;
    let xComp = 0.5 * Math.sin(angle) + 0.5;
    let yComp = -0.5 * Math.cos(angle) + 0.5;
    if (progress < 0.125) {
      yComp = 0;
    }
    if (progress >= 0.125) {
      val.push(line(1, 0));
      rev.push(line(...toMiddle(1, 0, thickness)));
      if (progress < 0.375) {
        xComp = 1;
      }
    }
    if (progress >= 0.375) {
      val.push(line(1, 1));
      rev.push(line(...toMiddle(1, 1, thickness)));
      if (progress < 0.625) {
        yComp = 1;
      }
    }
    if (progress >= 0.625) {
      val.push(line(0, 1));
      rev.push(line(...toMiddle(0, 1, thickness)));
      if (progress < 0.875) {
        xComp = 0;
      }
    }
    if (progress >= 0.875) {
      val.push(line(0, 0));
      rev.push(line(...toMiddle(0, 0, thickness)));
      yComp = 0;
    }
    val.push(line(xComp, yComp));
    rev.push(line(...toMiddle(xComp, yComp, thickness)));
    val = val.concat(rev.reverse(), end);
    return val.join(" ");
  };
  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setDimensions(contentRect.bounds);
      }}
    >
      {({ measureRef }) => (
        <div className={classes.wrapper}>
          <animated.div
            ref={measureRef}
            className={classes.progress}
            style={{ clipPath: getClipPath(progress) }}
          />
          <svg width={0} height={0}>
            <clipPath id="clipCountdown" clipPathUnits="objectBoundingBox">
              <path d={getClipPath(progress)} fillRule={"evenodd"} />
            </clipPath>
          </svg>
          <div className={classes.holder}>{props.children}</div>
        </div>
      )}
    </Measure>
  );
};
