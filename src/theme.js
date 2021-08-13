const size = {
  mobile: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "640px",
  tabletM: "800px",
  laptop: "960px",
  laptopM: "1280px",
  laptopL: "1440px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletM: `(min-width: ${size.tabletM})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

export const bp = {
  sm: device.mobile,
  md: device.tablet,
  lg: device.laptop,
  xl: device.laptopM,
};

export const colors = {
  black: "#000",
  white: "#FFF",

  primary: {
    navy25: "#C3BFD6",
    navy50: "#8780AE",
    navy75: "#4C4085",
    navy100: "#10005D",

    blue25: "#C3CCE5",
    blue50: "#8898CB",
    blue75: "#4C65B1",
    blue100: "#113297",

    orange25: "#FFD2CF",
    orange50: "#FFA5A0",
    orange75: "#FF7870",
    orange100: "#FF4B41",

    red25: "#ECC7C9",
    red50: "#D98E92",
    red75: "#C7565C",
    red100: "#B41E26",
  },

  accent: {
    gray25: "#EFEFEC",
    gray50: "#DFDFD9",
    gray75: "D0D0C6",
    gray100: "C0C0B3",

    sand25: "#F5EEE6",
    sand50: "#EBDCCD",
    sand75: "#E2CBB5",
    sand100: "#D8BA9C",

    green25: "#E6EDE5",
    green50: "#CDDBCA",
    green75: "#B4C9B0",
    green100: "#9BB796",

    teal25: "#E5EBF4",
    teal50: "#CBD7E9",
    teal75: "#B1C3DF",
    teal100: "#97AFD4",

    liliac25: "#EDE8F7",
    liliac50: "#DBD0EF",
    liliac75: "#C9B9E8",
    liliac100: "#B7A2E0",

    pink25: "#FAEAED",
    pink50: "#F4D6DB",
    pink75: "#EFC1CA",
    pink100: "#EAADB8",

    yellow25: "#F8F0DC",
    yellow50: "#F1E2B9",
    yellow75: "#EBD396",
    yellow100: "#E4C573",
  },
};

export const textSize = {
  text1: {
    laptop: "6.4rem",
    tablet: "4rem",
    mobile: "2.5rem",
  },

  text2: {
    laptop: "3.2rem",
    tablet: "3.5rem",
    mobile: "2.3rem",
  },

  text3: {
    laptop: "2.4rem",
    tablet: "2.5rem",
    mobile: "1.8rem",
  },

  text4: { laptop: "2rem", tablet: "2.1rem", mobile: "1.6rem" },
  text5: { laptop: "1.6rem", tablet: "1.7rem", mobile: "1.2rem" },
  text6: { laptop: "1rem", tablet: "1.1rem", mobile: "0.8rem" },

  body: {
    laptop: "1.8rem",
    tablet: "1.9rem",
    mobile: "1.7rem",
  },

  body2: {
    laptop: "1.6rem",
  },
};

export const lineHeight = {
  text1: {
    laptop: "7.6rem",
    tablet: "",
    mobile: "",
  },

  text2: {
    laptop: "4.2rem",
    tablet: "",
    mobile: "",
  },

  text3: {
    laptop: "3.2rem",
    tablet: "",
    mobile: "",
  },

  body: {
    laptop: "2.8rem",
    tablet: "",
    mobile: "",
  },

  body2: {
    laptop: "1.6rem",
    tablet: "",
    mobile: "",
  },
};

export const spacers = {
  spacer1: "4px",
  spacer2: "8px",
  spacer3: "12px",
  spacer4: "16px",
  spacer5: "32px",
  spacer6: "48px",
  spacer7: "72px",
};
