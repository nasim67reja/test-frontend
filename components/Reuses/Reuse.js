export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const replaceWhitespaceWithHyphen = (inputString) =>
  inputString.replace(/\s+/g, "-");

export const replaceHyphenWithWhitespace = (inputString) =>
  inputString.replace(/-+/g, " ").trim();
