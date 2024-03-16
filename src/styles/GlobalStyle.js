import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-red: hsl(356, 100%, 66%);
    --very-light-red: hsl(355, 100%, 74%);
    --very-dark-blue: hsl(208, 49%, 24%);
    --white: hsl(0, 0%, 100%);
    --grayish-blue: hsl(240, 2%, 79%);
    --very-dark-grayish-blue: hsl(207, 13%, 34%);
    --very-dark-black-blue: hsl(240, 10%, 16%);
    --very-dark-gray-blue: hsl(237, 17%, 21%);
    --very-dark-desaturated-blue: hsl(237, 23%, 32%);

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
    background-color: var(--white);
    font-family: "Overpass", sans-serif;
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
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 18px;
  }
`