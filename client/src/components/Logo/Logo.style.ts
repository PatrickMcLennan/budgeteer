import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 4.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  letter-spacing: 0.75vw;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  ${({ theme: { colors } }: any) => colors.mainGradient}
`;

export default StyledLogo;
