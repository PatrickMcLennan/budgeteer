import styled from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme: { flexin } }: any) => flexin('space-evenly', 'center', 'column')}
  ${({ theme: { elevation } }: any) =>
    elevation.mainInset}
  background-color: rgba(255,255,255,.8);
  align-self: stretch;
  transition: all 0.3s;
  transform: scale(1);

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.15);
  }
`;
