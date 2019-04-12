import styled from 'styled-components';
import { theme } from '../../utils/resets.style';

interface StyledDivProps {
  colorScheme: boolean;
}

export const StyledDiv = styled.div`
  margin: 0 auto;
  position: relative;
  bottom: 10vh;
  z-index: 7;
  border: 1px solid purple;
  &::before {
    background-color: ${(props: StyledDivProps) =>
      props.colorScheme ? theme.colors.mainGreen : 'red'};
  }
`;
