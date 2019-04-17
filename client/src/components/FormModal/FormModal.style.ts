import styled, { keyframes, css } from 'styled-components';

interface StyledFormProps {
  animateIn: boolean;
  animateOut: boolean;
  render: boolean;
  currentActions: number;
  animDelay: number;
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

  padding: 5vw;
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

  &:invalid {
    border-right: 3px solid red;
  }

  &:valid:not([type='submit']) {
    border-right: 3px solid ${({ theme: { colors } }: any) => colors.mainGreen};
  }

  &[type='submit'] {
    ${({ theme: { colors } }: any) => colors.mainGradient}
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    ${({ theme: { typo } }: any) => typo.mainLetterSpacing}
    text-transform: uppercase;
    cursor: pointer;
    padding: 1.75rem 2.5rem;
    font-size: 2.75rem;
  }

  &::placeholder {
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.5s ease-out;
    transition-delay: ${(props: StyledFormProps) => props.animDelay};
    ${(props: StyledFormProps) =>
      props.render &&
      css`
        opacity: 0.75;
        transform: translateY(0%);
      `};
  }
`;

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
  ${({ theme: { typo } }: any) =>
    typo.mainLetterSpacing}
  text-transform: uppercase;
  display: inline-block;
  margin: 1rem;
`;

export const StyledButtonBox = styled.div`
  ${({ theme: { flexin } }: any) => flexin('space-evenly')};
  flex-wrap: wrap;

  &[data-testid='form__submit'] {
    width: 100%;
  }
  &[data-testid='form__deleteButton'],
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

    &[data-testid='form__deleteButton'] {
      text-transform: uppercase;
      color: red;
      opacity: 0.85;
      border: 1px solid red;
    }

    &:not([data-testid='form__deleteButton']) {
      ${(props: StyledButtonProps) =>
        props.colorScheme &&
        css`
          border: 1px solid ${({ theme: { colors } }: any) => colors.mainGreen};
          color: ${({ theme: { colors } }: any) => colors.mainGreen};
          transform: scale(1.05)
            ${({ theme: { elevation } }: any) => elevation.mainOutset};
        `}
    }
  }
`;
