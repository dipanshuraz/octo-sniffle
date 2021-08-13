export const fixVal = (num, to) => {
  return num.toFixed(to);
};

export const timeSince = (timeStamp) => {
  var now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + "s ago";
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + "m ago";
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + "h ago";
  }
  if (secondsPast > 86400) {
    let day = timeStamp.getDate();
    let month = timeStamp
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(" ", "");
    let year =
      timeStamp.getFullYear() === now.getFullYear()
        ? ""
        : " " + timeStamp.getFullYear();
    return day + " " + month + year + "ago";
  }
};

export const checkStatus = (meter) => {
  if (meter) {
    const { aqi } = meter;
    if (aqi >= 0 && aqi <= 50) {
      return { color: "#55A84F", status: "GOOD" };
    } else if (aqi >= 51 && aqi <= 100) {
      return { color: "#A3C853", status: "SATISFACTORY" };
    } else if (aqi >= 101 && aqi <= 200) {
      return { color: "#FFF851", status: "MODERATE" };
    } else if (aqi >= 201 && aqi <= 300) {
      return { color: "#F29C3E", status: "POOR" };
    } else if (aqi >= 301 && aqi <= 400) {
      return { color: "#E93F33", status: "VERY POOR" };
    } else if (aqi >= 401 && aqi <= 500) {
      return { color: "#AF2D24", status: "SEVERE" };
    } else {
    }
  }
};
