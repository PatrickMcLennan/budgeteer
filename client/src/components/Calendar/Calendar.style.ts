import styled from 'styled-components';

interface StyledModalProps {
  currentActions: boolean;
}

export const StyledGrid = styled.section`
  height: 20rem;
  width: 20rem;
  background: purple;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 1s ease-in-out;
  transition-delay: 2s;

  ${(props: StyledModalProps): any =>
    props.currentActions && 'transform: translateX(0%); opacity: 1;'};
`;
