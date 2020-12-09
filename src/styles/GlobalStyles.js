import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #F0FFF1;
    --black: #4E4B5C;
  }

  * {
    font-family: 'Comfortaa', cursive;
    font-weight: 400;
  }

  body {
    background: var(--white);    
  }
`
