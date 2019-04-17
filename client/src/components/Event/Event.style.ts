import styled, { css } from 'styled-components';

interface StyledDivProps {
  triggerAnimation: boolean;
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
    box-shadow: ${({ theme: { elevation } }: any) => elevation.mainOutset};
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
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  align-self: stretch;
  transition: all 0.3s ease-out;
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
    box-shadow: ${({ theme: { elevation } }: any) => elevation.mainOutset};
    transform: scale(1.025);
  }
`;

export const StyledP = styled.p`
  ${({ theme: { typo } }: any) => typo.mainLetterSpacing}
  position: relative;
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
  padding: 0 1rem;
  margin-right: 0 0.5rem;

  &:not([data-testid='event__date']) {
    &::before {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: ${({ theme: { colors } }: any) => colors.mainGreen};
      content: '';
      display: inline-block;
    }
  }

  &[data-testid='event__date'] {
    display: inline-block;
    text-align: center;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    font-style: italic;

    &::before,
    &::after {
      display: none;
      content: '';
      display: block;
      background-color: black;
      height: 1px;
      width: 25%;
      transition: all 1.75s ease-out;

      transform: scaleX(0);
      ${(props: StyledDivProps) =>
        props.triggerAnimation &&
        css`
          transform: scaleX(1);
        `}
    }

    &::before {
      margin: 2.5px 30% 2.5px 45%;
      transform-origin: 100%;
    }

    &::after {
      margin: 2.5px 45% 2.5px 30%;
    }
  }
`;
