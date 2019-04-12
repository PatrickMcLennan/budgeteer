import styled from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledDivProps {
  colorScheme: boolean;
}

export const StyledDiv = styled.div`
  padding: 2.5rem 5rem;
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 7;
  border: 1px solid purple;
  text-align: center;

  &::before {
    content: '';
    height: 1px;
    display: inline-block;
    width: 80%;
    margin: auto;
    background-color: ${(props: StyledDivProps) =>
      props.colorScheme ? theme.colors.mainGreen : 'red'};
  }
`;
