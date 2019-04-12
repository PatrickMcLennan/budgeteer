import styled from 'styled-components';

export const StyledH6 = styled.h6`
  font-size: 2.5rem;
  border: 1px solid red;
  color: black;
`;
export const StyledGrid = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-area: 1 / 1 / -1 / -1;
  background-image: radial-gradient(
    ${({ theme: { colors } }: any) => colors.mainBlue} 5%,
    white 95%
  );
`;
