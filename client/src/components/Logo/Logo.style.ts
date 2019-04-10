import styled from 'styled-components';

const StyledLogo = styled.h1`
  position: relative;
  font-size: 5.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  letter-spacing: 0.75vw;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  ${({ theme: { colors } }: any) => colors.mainGradient}
  filter: drop-shadow(1px 1px 0 white);

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: -10%;
    height: 1px;
    background-color: purple;
    scale: 0;
    transform-origin: 100%;
    transition: all 0.4s ease-in-out;
    transform: scale(1);
  }
`;

export default StyledLogo;
