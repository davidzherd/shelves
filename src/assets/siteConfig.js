export const colors = {
  bg: "#FFF5E4",
  light: "#DDC9B4",
  khaki: "#BCAC9B",
  navi: "#2A3D45",
  rose: "#C17C74",
  lightGreen: "#C1D8C3",
  darkGreen: "#6A9C89",
  orange: "#FFB534",
};
export const colorsV2 = {
  bg: "hsl(220, 50%, 98%)",
  white: "hsl(150, 25%, 98%)",
  gray: "hsl(150, 10%, 96%)",
  navi: "hsl(193, 26%, 28%)",
  darkNavi: "hsl(195, 37%, 16%)",
  lightNavi: "hsl(195, 16%, 48%)",
  textLight: "hsl(196, 38%, 35%)",
  textDark: "hsl(196, 38%, 15%)",
  shadow: "hsl(210, 1%, 75%)",
  accentBlue: "hsl(193, 46%, 96%)",
  accentPink: "hsl(9, 49%, 67%)",
  accentPurple: "hsl(221, 58%, 74%)",
  accentLightPurple: "hsl(220, 85%, 89%)",
  greenSuccess: "hsl(132, 59%, 45%)",
  redFailed: "hsl(13, 77%, 45%)",
};
export const statusTypes = {
  new: "חדש",
  inProgress: "בתהליך ייצור",
  ready: "מוכן לאיסוף",
  done: "הושלם",
};
export function formatPrice(number) {
  return `${number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
export function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero-based (0-11)
  let year = date.getFullYear();

  // Add leading zeros to day and month if needed
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // Return the formatted date as "dd-mm-yyyy"
  return day + "-" + month + "-" + year;
}
