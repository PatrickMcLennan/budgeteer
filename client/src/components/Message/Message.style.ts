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

const divAnimation = keyframes`
  0% {
    transform: opacity(0) translateY(100%);
  }
  25% {
    transform: opacity(1) translateY(0)
  }
  75% {
    transform: opacity(1) translateY(0)
  }
  100% {
    transform: opacity(0) translateY(100%)
  }
`;

const messageAnimation = keyframes`
  0% {
    transform: scale(50) opacity(0);
  }

  25% {
    transform: scale(1) opacity(1);
  }

  75% {
    transform: scale(1) opacity(1);
  }

  100% {
    transform: scale(50) opacity(0);
  }
`;

export const StyledP = styled.p<StyledPProps>`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  padding: 2.5rem;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 0.35rem;
  transform: opacity(0);
  /* ${(props: StyledPProps) =>
    props.success &&
    css`
      animation: ${messageAnimation} 2s;
    `};
  ${(props: StyledPProps) =>
    props.error &&
    css`
      animation: ${messageAnimation} 2s;
    `}; */

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
    /* ${(props: StyledPProps) =>
      props.success &&
      css`
        animation: ${messageAnimation} 2s;
      `};
    ${(props: StyledPProps) =>
      props.error &&
      css`
        animation: ${messageAnimation} 2s;
      `}; */
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
  transform: opacity(0) translateY(100%);
/* 
  ${(props: StyledDivProps) => props.success && `opacity: 1;`}
  ${(props: StyledDivProps) => props.error && `opacity: 1;`} */
`;
