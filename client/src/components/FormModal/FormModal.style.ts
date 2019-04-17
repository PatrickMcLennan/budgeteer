import styled, { keyframes, css } from 'styled-components';

interface StyledFormProps {
  animateIn: boolean;
  animateOut: boolean;
  render: boolean;
  currentActions: number;
}

interface StyledButtonProps {
  colorScheme: boolean;
}

const formAnimateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const formAnimateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const backdropAnimateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const backdropAnimateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const StyledH2 = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 7.5rem;
  font-style: italic;
  line-height: 1.25;
  color: rgba(0, 0, 0, 0.35);
`;

export const Backdrop = styled.div`
  display: none;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 6;
  background: rgba(0, 0, 0, 0.35);

  transform-origin: bottom;
  transform: scaleY(0);

  ${(props: StyledFormProps) =>
    props.animateIn &&
    css`
      display: block;
      animation: ${backdropAnimateIn} 0.75s forwards;
    `};

  ${(props: StyledFormProps) =>
    props.render &&
    css`
      display: block;
      opacity: 1;
      transform: translateY(0%);
    `};

  ${(props: StyledFormProps) =>
    props.animateOut &&
    css`
      display: block;
      animation: ${backdropAnimateOut} 0.75s forwards;
    `}
`;

export const StyledForm = styled.form`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  display: none;

  position: relative;
  background-color: rgba(255, 255, 255, 0.925);
  margin: auto 5vw;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;

  opacity: 0;
  transform: translateY(-100%);

  padding: 5vw 5vw 12.5vw 5vw;

  ${(props: StyledFormProps) =>
    props.animateIn &&
    css`
      ${({ theme: { flexin } }: any) => flexin()};
      flex-wrap: wrap;
      animation: ${formAnimateIn} 0.75s forwards;
    `};
  ${(props: StyledFormProps) =>
    props.render &&
    css`
      ${({ theme: { flexin } }: any) => flexin()};
      flex-wrap: wrap;
      opacity: 1;
      transform: translateY(0%);
    `}
  ${(props: StyledFormProps) =>
    props.animateOut &&
    css`
      ${({ theme: { flexin } }: any) => flexin()};
      flex-wrap: wrap;
      animation: ${formAnimateOut} 0.75s forwards;
    `}
`;

export const StyledInput = styled.input`
  ${({ theme: { typo } }: any) => typo.mainLetterSpacing};
  font-weight: 100;
  position: relative;
  margin: 1rem 2rem;
  border: none;
  z-index: 7;
  text-align: left;
  font-size: 2.25rem;
  padding: 1rem;
  text-transform: none;
  background: none;
  text-align: right;

  &:invalid:not([type='submit']) {
    border-right: 3px solid red;
  }

  &:valid:not([type='submit']) {
    border-right: 3px solid ${({ theme: { colors } }: any) => colors.mainGreen};
  }

  &[type='submit'] {
    text-transform: uppercase;
    ${({ theme: { typo } }: any) => typo.mainLetterSpacing}
  }

  &::placeholder {
    display: none;
    font-style: italic;
    opacity: 0.75;
    opacity: 0;
    transition: all 1.5s ease-out;

    ${(props: StyledFormProps) =>
      props.currentActions > 1 &&
      css`
        display: block;
        opacity: 1;
      `}
  }
`;

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
  ${({ theme: { typo } }: any) =>
    typo.mainLetterSpacing}
  text-transform: uppercase;
  display: inline-block;
  margin: 1rem;

  &[for='submit'] {
    position: absolute;
    bottom: 0.5vw;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    border: 1px solid red;
  }

  & > input:invalid ~ label:last-of-type {
    border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};
  }
`;

export const StyledButtonBox = styled.div`
  ${({ theme: { flexin } }: any) => flexin('space-evenly')};
  flex-wrap: wrap;

  &[data-testid='form__monthButton'],
  &[data-testid='form__yearButton'] {
    ${({ theme: { elevation } }: any) => elevation.mainInset}
    margin: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 1.6rem;
    cursor: pointer;

    border: 1px solid rgba(0, 0, 0, 0.4);
    color: rgba(0, 0, 0, 0.4);
    transform: scale(1);
    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
      transform: scale(1.05)
        ${({ theme: { elevation } }: any) => elevation.mainOutset};
    }

    ${(props: StyledButtonProps) =>
      props.colorScheme &&
      css`
        border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};
        color: ${({ theme: { colors } }: any) => colors.mainGreen};
        transform: scale(1.05)
          ${({ theme: { elevation } }: any) => elevation.mainOutset};
      `}
  }
`;
