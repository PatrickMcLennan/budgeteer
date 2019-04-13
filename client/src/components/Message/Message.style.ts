import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledDivProps {
  success: boolean;
  error: boolean;
}

interface StyledPProps {
  success: boolean;
  error: boolean;
}

const pAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  25% {
    opacity: 1;
    transform: translateY(0%);
  }
  75% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const divAnimation = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

export const StyledP = styled.p<StyledPProps>`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  padding: 2.5rem;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 0.35rem;
  transform: translateY(100%);

  ${(props: StyledDivProps) =>
    props.success &&
    css`
      animation: ${pAnimation} 2s;
    `}
  ${(props: StyledDivProps) =>
    props.error &&
    css`
      animation: ${pAnimation} 2s;
    `}

  &::before,
  &::after {
    position: absolute;
    left: 10%;
    right: 10%;
    content: '';
    height: 1px;
    display: inline-block;
    margin: auto;
    scale: 0;
    background-color: ${(props: StyledPProps) =>
      props.success ? theme.colors.mainGreen : 'red'};
  }

  &::before {
    top: 1.25rem;
  }
  &::after {
    bottom: 1.25rem;
    transform-origin: 100%;
  }
`;

export const StyledDiv = styled.div<StyledDivProps>`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
  overflow: hidden;
  position: absolute;
  bottom: 10rem;
  left: 50%;
  z-index: 7;
  text-align: center;
  opacity: 0;
  transform: translateX(-50%);
  ${(props: StyledDivProps) =>
    props.success &&
    css`
      animation: ${divAnimation} 3s;
    `}
  ${(props: StyledDivProps) =>
    props.error &&
    css`
      animation: ${divAnimation} 3s;
    `};
`;
