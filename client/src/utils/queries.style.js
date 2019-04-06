import { css } from 'styled-components';

const sizes = {
  fourteen: 1400,
  thirteen: 1300,
  twelve: 1200,
  eleven: 1100,
  ten: 1000,
  nine: 900,
  eight: 800,
  seven: 700,
  six: 600,
  five: 500,
  four: 400
};

const media = Object.keys(sizes).reduce((final, size) => {
  return {
    ...final,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export default media;
