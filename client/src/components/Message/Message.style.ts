import styled, { css } from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledMessageProps {
  success: boolean;
  error: boolean;
}

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
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 7;
  text-align: center;
  transform: scale(0);
  transform: ${(props: StyledMessageProps) => props.success && `scale(1);`};
`;
