import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    position: relative;
    display: grid;
    grid-template-rows: 15vh minmax(85vh, 1fr);
    grid-template-columns: 100vw;
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const theme = {
  colors: {
    mainGreen: '#2ecc71',
    mainBlue: '#3498db',
    mainGradient: `background-image: linear-gradient(
      to bottom right,
      #3498db 48.5%,
      transparent 48.5%,
      transparent 51.5%,
      #2ecc71 51.5%
    );`
  },
  typo: {
    mainLetterSpacing: 'letter-spacing: .125rem;'
  },
  borderRadius: {
    main: 'border-radius: 2.5%'
  },
  flexin: (jc = 'center', ai = 'center', fd = 'row') =>
    `display: flex; justify-content: ${jc}; align-items: ${ai}; flex-direction: ${fd};`
};
