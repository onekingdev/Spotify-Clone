export const msToMinute = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
export const joinArray = (arr) => {
  if (arr === undefined) {
    return;
  }
  return arr.map((item) => {
    return item.name;
  });
};
