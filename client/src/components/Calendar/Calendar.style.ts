import styled from 'styled-components';

export const StyledH6 = styled.h6`
  font-size: 2.5rem;
  border: 1px solid red;
  color: black;
`;
export const StyledGrid = styled.section`
  ${({ theme: { flexin } }: any) => flexin()};
  ${({ theme: { colors } }: any) => colors.reversedGradient}
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
`;
