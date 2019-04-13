import styled from 'styled-components';

interface StyledModalProps {
  triggerFade: boolean;
  toggleRender: boolean;
}

export const StyledModal = styled.section`
  ${({ theme: { flexin } }: any) => flexin('space-around', 'center', 'column')}
  grid-area: 1 / 1 / -1 / -1;
  margin: 1.5vh 5vh;
  padding: 0 1.5vh;
  text-align: center;
  z-index: 6;
  transition: all 1s ease-in-out;
  opacity: ${(props: StyledModalProps): any =>
    props.triggerFade ? `1;` : `0;`};
  ${(props: StyledModalProps): any => !props.toggleRender && `display: none;`}
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
