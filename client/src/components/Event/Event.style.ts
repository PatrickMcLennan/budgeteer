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
  &:focus {
    transform: scale(1.025);
  }
`;

export const StyledP = styled.p`
  ${({ theme: { typo } }: any) => typo.mainLetterSpacing}
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
`;
