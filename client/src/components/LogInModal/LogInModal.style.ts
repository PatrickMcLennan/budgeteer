import styled from 'styled-components';

interface StyledModalProps {
  currentActions: boolean;
}

export const StyledModal = styled.section`
  ${({ theme: { flexin } }: any) => flexin('space-around', 'center', 'column')}
  ${({ theme: { borderRadius } }: any) =>
    borderRadius.main}
  grid-area: 2 / 1 / -1 / -1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 1.5vh 5vh;
  padding: 0 1.5vh;
  text-align: center;
  box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.12),
    inset 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  transform: translateY(-120%);
  opacity: 0;
  transition: all 1s ease-in-out;
  ${(props: StyledModalProps): any =>
    props.currentActions && `transform: translateY(0%); opacity: 1;`};

  &.displayNone {
    display: none;
  }
`;

export const StyledH2 = styled.h2`
  margin: 20vh 0;
  text-align: center;
  font-size: 7.5rem;
  text-transform: lowercase;
  font-weight: 300;
  color: #7f8c8d;
`;

export const StyledSVGBox = styled.div`
  ${({ theme: { flexin } }: any) => flexin('space-evenly')}
  margin: 10vh;
  width: 60%;
`;

export const StyledP = styled.p`
  ${({ theme: { typo } }: any) => typo.mainLetterSpacing}
  font-size: 1.6rem;
  font-style: italic;

  &:not(:last-child) {
    margin-top: 2vh;
  }

  &:last-child {
    margin-bottom: 3vh;
  }
`;
