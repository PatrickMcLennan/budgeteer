import styled from 'styled-components';

export const StyledH6 = styled.h6`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  font-size: 2.5rem;
  font-weight: 100;
`;
export const StyledGrid = styled.section`
  position: relative;
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
  z-index: 5;
`;
