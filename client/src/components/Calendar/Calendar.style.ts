import styled, { keyframes } from 'styled-components';

interface StyledGridProps {
  fade: boolean;
}

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
  grid-area: 1 / 1 / -1 / -1;
  opacity: 0;
  transition: all 1s ease-in-out;
  ${({ fade }: StyledGridProps): any => fade && `opacity: 1;`};
`;
