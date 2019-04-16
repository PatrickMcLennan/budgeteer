import styled, { keyframes, css } from 'styled-components';

interface StyledFormProps {
  animateIn: boolean;
  animateOut: boolean;
  render: boolean;
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
  background: rgba(0, 0, 0, 0.25);

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

  padding: 5vw;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  margin: auto 5vw;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;

  opacity: 0;
  transform: translateY(-100%);

  ${(props: StyledFormProps) =>
    props.animateIn &&
    css`
      display: block;
      animation: ${formAnimateIn} 0.75s forwards;
    `};
  ${(props: StyledFormProps) =>
    props.render &&
    css`
      display: block;
      opacity: 1;
      transform: translateY(0%);
    `}
  ${(props: StyledFormProps) =>
    props.animateOut &&
    css`
      display: block;
      animation: ${formAnimateOut} 0.75s forwards;
    `}
`;

export const StyledInput = styled.input`
  position: relative;
  margin: 1rem 2rem;
  border: none;
  z-index: 7;
  text-align: left;
  font-size: 2rem;
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
    font-style: italic;
    opacity: 0.75;
  }
`;

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
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

  & > input:invalid ~ label > input[type='submit'] {
    border: 1px solid red;
  }
`;
