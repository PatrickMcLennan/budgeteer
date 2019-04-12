import styled from 'styled-components';

export const StyledH6 = styled.h6`
  font-size: 2.5rem;
  border: 1px solid red;
  color: black;
`;
export const StyledGrid = styled.section`
  display: grid;
  margin: 2.5vw;
  grid-template-rows: 5vh repeat(auto-fit, minmax(250px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-flow: row;
  grid-area: 1 / 1 / -1 / -1;
  grid-gap: 1rem;
  box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.12),
    inset 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background-image: radial-gradient(
    ${({ theme: { colors } }: any) => colors.mainBlue} 5%,
    white 95%
  );
`;
