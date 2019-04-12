import styled from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledPProps {
  colorScheme: boolean;
}

export const StyledP = styled.p`
  position: relative;
  padding: 1rem;
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
    background-color: ${(props: StyledPProps) =>
      props.colorScheme ? theme.colors.mainGreen : 'red'};
  }

  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
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
`;
