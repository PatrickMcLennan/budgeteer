import styled from 'styled-components';

interface StyledDivProps {
  triggerAnimation: number;
}

export const StyledButton = styled.button`
  ${({ theme: { typo } }: any) => typo.mainLetterSpacing}
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: absolute;
  bottom: 5%;
  left: 5%;
  padding: 1rem 2rem;
  background: transparent;
  font-size: 1.75rem;
  text-transform: uppercase;
  font-style: italic;
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
    transform: scale(1.075) translateX(7.5%);
  }
`;

export const StyledDiv = styled.div`
  position: relative;
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
  text-align: right;

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
