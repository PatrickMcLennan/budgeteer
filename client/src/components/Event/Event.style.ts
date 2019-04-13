import styled from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  background-color: rgba(255,255,255,.8);
  padding: 0.5rem;
  align-self: stretch;
  transition: all 0.3s;
  transform: scale(1);

  & p:nth-of-type(even) {
    text-align: right;
  }
  &:active,
  &:focus {
    transform: scale(1.15);
  }
`;

export const StyledP = styled.p`
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
`;
