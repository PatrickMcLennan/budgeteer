import styled from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme: { borderRadius } }: any) => borderRadius.main};
  position: relative;
  border: 0.5px solid black;
  margin: 1.5rem auto;
  padding: 0.5rem;
`;
