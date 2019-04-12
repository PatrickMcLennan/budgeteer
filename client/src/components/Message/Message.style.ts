import styled from 'styled-components';

interface StyledDivProps {
  colorScheme: string;
}

export const StyledDiv = styled.div`
  position: relative;
  left: 50%;
  bottom: 3vh;
  transform: translateX(-50%);

  &::before {
    background-color: ${(props: StyledDivProps) =>
      props.colorScheme === 'success' ? 'green' : 'red'};
  }
`;
