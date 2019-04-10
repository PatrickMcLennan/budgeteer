import styled from 'styled-components';

export const StyledH6 = styled.h6`
  font-size: 2.5rem;
  border: 1px solid red;
  color: black;
`;
export const StyledGrid = styled.section`
  ${({ theme: { flexin } }: any) => flexin()};
  background-image: radial-gradient(
    ${({ theme: { colors } }: any) => colors.mainBlue} 5%,
    white 95%
  );
  grid-area: 2 / 1 / -1 / -1;
`;
