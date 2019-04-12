import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledMessageProps {
  success: boolean;
  error: boolean;
}

const messageAnimation = keyframes`
  0% {
    transform: scaleX(0) translateX(0)
  }

  25% {
    transform: scaleX(1) translateX(-50%)
  }

  75% {
    transform: scaleX(1) translateX(-50%)
  }

  100% {
    transform: scaleX(0) translateX(0)
  }
`;

export const StyledP = styled.p<StyledMessageProps>`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  padding: 2.5rem;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 0.35rem;

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
    background-color: ${(props: StyledMessageProps) =>
      props.success ? theme.colors.mainGreen : 'red'};
    transform: scale(1);
  }

  &::before {
    top: 1.25rem;
  }
  &::after {
    bottom: 1.25rem;
    transform-origin: 100%;
  }
`;

export const StyledDiv = styled.div`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
  overflow: hidden;
  position: absolute;
  bottom: 10rem;
  left: 50%;
  z-index: 7;
  text-align: center;
  transform: scaleX(0) translateX(0);
  transform-origin: 100%;
  ${(props: StyledMessageProps) =>
    props.success &&
    css`
      animation: ${messageAnimation} 2s;
    `}
  ${(props: StyledMessageProps) =>
    props.error &&
    css`
      animation: ${messageAnimation} 2s;
    `}
`;
