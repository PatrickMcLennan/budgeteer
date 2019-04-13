import styled, { css } from 'styled-components';

interface StyledButtonProps {
  colorScheme: number;
}

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
  font-size: 7vh;

  ${(props: StyledButtonProps) =>
    props.colorScheme !== 2 &&
    css`
      border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};

      & > * {
        stroke: ${({ theme: { colors } }: any) => colors.mainGreen};
        fill: ${({ theme: { colors } }: any) => colors.mainGreen};
        color: ${({ theme: { colors } }: any) => colors.mainGreen};
      }

      & > *:not(svg) {
        transform: rotate(45deg);
      }
    `}

  ${(props: StyledButtonProps) =>
    props.colorScheme === 2 &&
    css`
      border: 1px solid red;

      & > * {
        stroke: red;
        fill: red;
        color: red;
      }
    `}
`;

export default StyledButton;
