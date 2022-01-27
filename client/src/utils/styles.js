import { css } from "styled-components";

export const colors = {
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

export const sizes = {
    appNavBarLeftWidth: "",
    secondarySideBarWidth: "",
    minViewportWidth: "",
};

export const zIndexValues = {
    modal: 1000,
    dropdown: 101,
    nav: 100,
};

export const font = {
    regular: 'font-family:  "Noto Sans Display", sans-serif; ; font-weight: normal;',

    size: (size) => `font-size: ${size}px;`,
};
