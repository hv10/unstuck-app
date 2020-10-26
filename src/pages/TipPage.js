import React from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cat1tl, cat1br, cat2tl, cat2br } from "../constants/colors";
import { parseContent } from "../utils/tipParsing";

const useStyles = createUseStyles({
  page: {
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    fontSize: "1rem",
    minHeight: "100vh",
    paddingBottom: 1,
  },
  tipContent: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "min(800px, 90vw)",
    backgroundColor: "white",
    borderRadius: 35,
    paddingBottom: "1vh",
    paddingTop: "0.5em",
    paddingLeft: "1em",
    paddingRight: "1em",
    minHeight: "70vh",
    "@global img": {
      width: "100%",
      maxWidth: "700px",
    },
    "@global span": {
      textAlign: "center",
      width: "100%",
      display: "inline-block",
    },
  },
  tipTitle: {
    fontSize: "2rem",
    fontFamily: "Courier Prime, monospace",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
  },
  tipNumber: {
    fontSize: "2rem",
    fontFamily: "Courier Prime, monospace",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
  },
  tipCategory: {
    fontSize: "1rem",
    fontStyle: "italic",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
  },
  tipMeta: {
    padding: "0 0 10px 5vw",
  },
});

export const TipPage = () => {
  const { id, mode } = useParams();
  const classes = useStyles();
  const [tipContent, setTipContent] = React.useState("Loading...");
  const [meta, setMeta] = React.useState({});
  React.useEffect(() => {
    const p = process.env.PUBLIC_URL + "/tips/" + mode + "/" + id + ".md";
    fetch(p)
      .catch((error) => console.log(error))
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        const { metaVars, content } = parseContent(text);
        setMeta(metaVars);
        setTipContent(content);
      });
  }, [id, mode]);
  const topLeftColor = mode === "focused" ? cat1tl : cat2tl;
  const bottomRightColor = mode === "focused" ? cat1br : cat2br;
  return (
    <div
      className={classes.page}
      style={{
        background: `repeating-linear-gradient(-35deg, ${bottomRightColor} 0%, ${topLeftColor} 100%)`,
      }}
    >
      <div className={classes.tipMeta}>
        <div className={classes.tipNumber}>
          <span style={{ fontSize: "0.75em" }}>#</span>
          {meta["number"]}
        </div>
        <div className={classes.tipTitle}>{meta["title"]}</div>
        <div className={classes.tipCategory}>{meta["category"]}</div>
      </div>
      <div className={classes.tipContent}>
        <ReactMarkdown source={tipContent} escapeHtml={false} />
      </div>
    </div>
  );
};
