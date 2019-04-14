import styled, { css } from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledButtonProps {
  colorScheme: number;
}

interface StyledH6Props {
  colorScheme: number;
}

export const StyledH6 = styled.h6`
  font-size: 7.5vh;
  border: 1px solid red;
  font-weight: 100;
  transition: all 1s;
  transform-style: preserve-3d;
  transform: rotate(0);
  color: ${(props: StyledH6Props) =>
    props.colorScheme !== 2 ? theme.colors.mainGreen : `red`};
  border: ${(props: StyledH6Props) =>
    props.colorScheme !== 2 ? theme.colors.mainGreen : `red`};
  ${(props: StyledH6Props) =>
    props.colorScheme === 2
      ? `transform: rotate(45deg)`
      : `transform: rotate(0)`}
`;

export const StyledButton = styled.button`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  z-index: 10;
  position: fixed;
  text-align: center;
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

  ${(props: StyledButtonProps) =>
    props.colorScheme !== 2 &&
    css`
      border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};

      & > svg {
        stroke: ${({ theme: { colors } }: any) => colors.mainGreen};
        fill: ${({ theme: { colors } }: any) => colors.mainGreen};
      }
    `}

  ${(props: StyledButtonProps) =>
    props.colorScheme === 2 &&
    css`
      border: 1px solid red;

      & > svg {
        stroke: red;
        fill: red;
      }
    `}
`;
