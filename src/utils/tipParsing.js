export const parseContent = (text) => {
  let lines = text.split("\n");
  var i = 0;
  let metaVars = {};
  while (lines[i].startsWith("--")) {
    let tokens = lines[i].slice(2).split(" ");
    metaVars[tokens[0]] = tokens.slice(1).join(" ");
    i++;
  }
  return { metaVars: metaVars, content: lines.slice(i).join("\n") };
};
