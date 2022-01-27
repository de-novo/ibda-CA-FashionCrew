import styled from "styled-components";
const colors = {
    primary: "#111",
    success: "",
    danger: "",
    warning: "",
    secondary: "",

    textDarkest: "",
    textDark: "",
    textMedium: "",
    textLight: "",
    textLink: "",

    backgroundDarkest: "#000000",
    backgroundDarkPrimary: "#737272",
    backgroundmedium: "#CCCCCC",
    backgroundLight: "",
    backgroundLightest: "#FFFFFF",
    backgroundLightPrimary: "#FCFCFC",
    backgroundLightSuccess: "",
    backgroundTransparent: "transparent",

    borderLightest: "",
    borderLight: "",
    borderInputFocus: "",
};

const sizes = {
    appNavBarheight: "6rem",
    appActiveNavBarheight: "",
    minViewportWidth: "",
};

const zIndexValues = {
    modal: 1000,
    dropdown: 101,
    navLeft: 100,
};

const font = {
    regular: 'font-family:  "Noto Sans Display", sans-serif;  ',

    size:{xxS:'1rem',xS:'1.2rem',S: '1.4rem',M:'1.6rem',L:'1.8rem',xL:'2.4rem' ,xxL: '2.8rem'},
};
const common = {
    flexCenter:`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `,
    flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};
const theme = {
    zIndexValues,
    colors,
    sizes,
    font,
    common,
};

export default theme;
