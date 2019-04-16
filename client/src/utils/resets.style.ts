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
  .container {
    position: relative;
    display: grid;
    grid-template-rows: minmax(100vh, max-content);
    grid-template-columns: 100vw;
    overflow-x: hidden;
    font-family: Helvetica, sans-serif;
  }
`;

export const theme = {
  colors: {
    mainGreen: '#2ecc71',
    mainBlue: '#3498db',
    mainGradient: `background-image: linear-gradient(
      to bottom right,
      #3498db 22.5%,
      #2ecc71 48.5%,
      transparent 48.5%,
      transparent 51.5%,
      #2ecc71 51.5%, 
      #3498db 77.5%
    );`
  },
  typo: {
    mainLetterSpacing: 'letter-spacing: .125rem;'
  },
  elevation: {
    mainInset: `box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.12),
    inset 0 2px 4px 0 rgba(0, 0, 0, 0.08);`,
    mainOutset: `0 4px 8px 0 rgba(0, 0, 0, 0.12);`
  },
  flexin: (jc = 'center', ai = 'center', fd = 'row') =>
    `display: flex; justify-content: ${jc}; align-items: ${ai}; flex-direction: ${fd};`
};
