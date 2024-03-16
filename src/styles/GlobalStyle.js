import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --java-50: #f1fcfa;
    --java-100: #d1f6f3;
    --java-200: #a3ece7;
    --java-300: #6ddbd8;
    --java-400: #45c4c4;
    --java-500: #26a4a6;
    --java-600: #1b8386;
    --java-700: #1a676b;
    --java-800: #195256;
    --java-900: #194548;
    --java-950: #09262a;
    --white: #fff;
    --black: #000;
    --yellow: #fcff87;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  html {
    scroll-behavior: smooth;
    line-height: 1.15;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--java-200);
    /* padding: 10px 10px; */
    font-family: "Roboto", sans-serif;
  }

  li {
    list-style-type: none;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: var(--white);
    font-size: 18px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
  }
`