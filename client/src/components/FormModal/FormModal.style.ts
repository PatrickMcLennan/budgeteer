import styled from 'styled-components';

export const Backdrop = styled.div`
  ${({ theme: { flexin } }: any) => flexin()}
  grid-area: 1 / 1 / -1 / -1;
  z-index: 6;
  background: rgba(0, 0, 0, 0.25);
`;

export const StyledForm = styled.form`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;
  border: 1px solid red;
`;

export const StyledInput = styled.input`
  ${({ theme: { borderRadius } }: any) => borderRadius.main};
  grid-area: 1 / 1 / -1 / -1;
  z-index: 8;
  border: 0.5px solid black;
`;
