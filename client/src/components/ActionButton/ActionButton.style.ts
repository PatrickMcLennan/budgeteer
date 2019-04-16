import styled, { css } from 'styled-components';

interface StyledButtonProps {
  colorScheme: number;
  animateIn: boolean;
  animateOut: boolean;
}

export const StyledH6 = styled.h6`
  font-size: 7.5vh;
  font-weight: 100;
  transition: all 0.75s;
  transform-origin: center center;
  transform: rotate(0);
  ${(props: StyledButtonProps) =>
    props.animateIn &&
    css`
      transform: rotate(45deg) translateY(-15%);
      font-size: 10vh;
      filter: drop-shadow(
        ${({ theme: { elevation } }: any) => elevation.mainOutset}
      );
    `}
  ${(props: StyledButtonProps) =>
    props.animateOut &&
    css`
      transform: rotate(0);
    `}
`;

export const StyledButton = styled.button`
  ${({ theme: { flexin } }: any) => flexin()}
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  z-index: 10;
  position: fixed;
  text-align: center;
  bottom: 5vh;
  right: 5vh;
  height: 10vh;
  width: 10vh;
  border-radius: 100%;
  filter: drop-shadow(1px 1px 0 grey);
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme: { colors } }: any) => colors.mainGreen};

  & > svg {
    stroke: ${({ theme: { colors } }: any) => colors.mainGreen};
    fill: ${({ theme: { colors } }: any) => colors.mainGreen};
  }

  ${(props: StyledButtonProps) =>
    props.animateIn &&
    css`
      border: 1px solid red;
      color: red;

      & > svg {
        stroke: red;
        fill: red;
      }
    `}

  ${(props: StyledButtonProps) =>
    props.animateOut &&
    css`
      border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};
      color: ${({ theme: { colors } }: any) => colors.mainGreen};

      & > svg {
        stroke: ${({ theme: { colors } }: any) => colors.mainGreen};
        fill: ${({ theme: { colors } }: any) => colors.mainGreen};
      }
    `}
`;
