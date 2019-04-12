import styled from 'styled-components';

const StyledButton = styled.button`
  ${({ theme: { flexin } }: any) => flexin()}
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  z-index: 10;
  position: fixed;
  bottom: 5vh;
  right: 5vh;
  height: 10vh;
  width: 10vh;
  border-radius: 100%;
  border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};
  filter: drop-shadow(1px 1px 0 grey);
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
`;

export default StyledButton;
