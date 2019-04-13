import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  ${({ theme: { flexin } }: any) =>
    flexin(
      'space-evenly',
      'stretch',
      'column'
    )}
  background-color: rgba(255,255,255,.8);
  padding: 0.5rem;
  align-self: stretch;
  transition: all 0.3s;
  transform: scale(1);
  cursor: pointer;
  z-index: 6;

  & > * {
    z-index: 6;
  }

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.15);
  }
`;

export const StyledP = styled.p`
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
  background: purple;
`;
