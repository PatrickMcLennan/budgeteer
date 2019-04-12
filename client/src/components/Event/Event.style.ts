import styled from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  background-color: rgba(255,255,255,.8);
  align-self: stretch;
`;
