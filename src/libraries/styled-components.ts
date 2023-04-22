import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle``;

export const THEME = {
  primary: {
    main: "#1DA1F2",
  },
  dark: {
    primary: {
      dark: "#1a1a1a",
      light: "#242424",
    },
    colorText: {
      main: "rgba(235, 235, 235, .6)",
      light: "rgba(255, 255, 255, .87)",
    },
  },
  light: {
    primary: {
      dark: "white",
      light: "#f9f7f7",
    },
    colorText: {
      main: "rgba(235, 235, 235, .6)",
      light: "#213547",
    },
  },
};
