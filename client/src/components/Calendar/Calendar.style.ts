import styled from 'styled-components';

export const StyledH6 = styled.h6`
  font-size: 2.5rem;
  border: 1px solid red;
  color: black;
`;
export const StyledGrid = styled.section`
  ${({ theme: { flexin } }: any) => flexin()};
  grid-area: 2 / 1 / -1 / -1;
  height: 20rem;
  width: 20rem;
  background: purple;
`;
