import styled from 'styled-components';

interface StyledDivProps {
  triggerAnimation: number;
}

export const StyledDiv = styled.div`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  ${({ theme: { flexin } }: any) =>
    flexin(
      'space-evenly',
      'stretch',
      'column'
    )}
  background-color: rgba(255,255,255,.8);
  padding: 0.5rem;
  align-self: stretch;
  transition: all 0.3s;
  transform: scaleY(0);
  transform-origin: top;
  cursor: pointer;
  z-index: 6;

  ${(props: StyledDivProps) =>
    props.triggerAnimation && `transform: scaleY(1)`};

  &:hover,
  &:active,
  &:focus,
  & > p:hover,
  & > p:active,
  & > p:focus {
    transform: scale(1.15);
  }
`;

export const StyledP = styled.p`
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
`;
