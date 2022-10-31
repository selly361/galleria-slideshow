import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --color-black: #000;
    --color-grey-1: #7D7D7D;
    --color-grey-9: #E5E5E5;
    --color-grey-10: #F3F3F3;
    --color-white: #FFF;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }



  /* Set core body defaults */
  body {
    min-height: 100vh;
    width: 100vw;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Libre Baskerville', serif;
    color: var(--color-black);
    overflow-x: hidden;
  }


  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  // remove default styles for list's

  ul {
    list-style: none;
    padding: 0;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  

  a:focus,
  button:focus {
    outline: 2px dashed red;
    outline-offset: 4px;
  }

  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible) {
    outline: none;
  }


`
