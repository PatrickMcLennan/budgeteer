import styled from 'styled-components';

const StyledButton = styled.button`
  ${({ theme: { flexin } }: any) => flexin()}
  z-index: 100;
  position: absolute;
  bottom: 5vh;
  right: 5vh;
  height: 10vh;
  width: 10vh;
  border-radius: 100%;
  border: 2px solid black;
  overflow: hidden;
  cursor: pointer;
`;

export default StyledButton;
