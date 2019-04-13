import styled from 'styled-components';

export const StyledH6 = styled.h6`
  grid-area: 2 / 1 / -1 / -1;
  text-align: center;
  margin-top: 1.5rem;
  color: black;
  font-size: 2.5rem;
  font-weight: 100;
  opacity: 0.5;
`;
export const StyledGrid = styled.section`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  display: grid;
  margin: 2.5vw;
  padding: 1rem;
  grid-template-rows: repeat(auto-fill, 200px);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-area: 1 / 1 / -1 / -1;
  grid-auto-flow: row;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    ${({ theme: { colors } }: any) => colors.mainBlue} 5%,
    white 95%
  );
  z-index: 5;
`;
