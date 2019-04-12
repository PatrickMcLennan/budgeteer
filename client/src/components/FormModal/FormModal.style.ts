import styled from 'styled-components';

export const Backdrop = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  z-index: 6;
  background: rgba(0, 0, 0, 0.25);
`;

export const StyledForm = styled.form`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  margin: 25%;
  background-color: rgba(255, 255, 255, 0.25);
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;
  border: 1px solid red;
  background: 5px solid red;
`;

export const StyledInput = styled.input`
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;
  border: 0.5px solid black;
`;
