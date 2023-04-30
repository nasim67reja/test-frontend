export const capitalizedWords = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return `${firstLetter}${restOfWord}`;
};

export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
// export const URL = "https://sowp-new-backend.herokuapp.com";
// export const URL = "https://test-backend.up.railway.app";

export const URL = "http://localhost:8000";

export const convertDateFormate = (dateIn) => {
  const date = new Date(dateIn);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};
