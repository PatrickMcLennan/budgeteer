import styled from 'styled-components';

const StyledLogo = styled.h1`
  ${({ theme: { colors } }: any) => colors.mainGradient}
  font-size: 7.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  letter-spacing: 0.75vw;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  filter: drop-shadow(1px 1px 0 white);
`;

export default StyledLogo;
