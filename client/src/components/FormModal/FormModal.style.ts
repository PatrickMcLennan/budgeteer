import styled, { keyframes, css } from 'styled-components';

interface StyledFormProps {
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
  text-align: center;
  font-size: 7.5rem;
  font-style: italic;
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
    props.render &&
    css`
      display: block;
      animation: ${backdropAnimateIn} 0.75s forwards;
    `};

  ${(props: StyledFormProps) =>
    !props.render &&
    css`
      display: block;
      animation: ${backdropAnimateOut} 0.75s forwards;
    `};
`;

export const StyledForm = styled.form`
  ${({ theme: { elevation } }: any) => elevation.mainInset}

  display: none;

  padding: 2.5vh 5vw;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  margin: auto 5vw;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;

  opacity: 0;
  transform: translateY(-100%);

  ${(props: StyledFormProps) =>
    props.render &&
    css`
      display: grid;
      grid-template-rows: 150px repeat(auto-fit, 100px);
      grid-template-columns: repeat(auto-fit, 100px);
      animation: ${formAnimateIn} 0.75s forwards;
    `};
  ${(props: StyledFormProps) =>
    !props.render &&
    css`
      display: grid;
      grid-template-rows: 150px repeat(auto-fit, 100px);
      grid-template-columns: repeat(auto-fit, 100px);
      animation: ${formAnimateOut} 0.75s forwards;
    `}

  & > *:not(h2) {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  & h2 {
    grid-area: 1 / 1 / 2 / -1;
  }
  /*

  & label[for='name'] {
    grid-area: 2 / 1 / 3 / 3;
  }

  & label[for='location'] {
    grid-area: 4 / 1 / 5 / 3;
  }

  & label[for='description'] {
    grid-area: 2 / 4 / 5 / -1;
  }

  & label[for='year'] {
    grid-area: 3 / 2 / 4 / 3;
  }

  & label[for='month'] {
    grid-area: 5 / 4 / 6 / 5;
  }

  & label[for='day'] {
    grid-area: 5 / 3 / 6 / 4;
  }

  & label[for='date'] {
    grid-area: 5 / 1 / 6 / 3;
  }


  & label[for='startTime'] {
    grid-area: 2 / 3 / 3 / -1;
  }

  & label[for='endTime'] {
    grid-area: 2 / 3 / 3 / -1;
  }

  & label[for='cost'] {
    grid-area: 2 / 3 / 3 / -1;
  }

  & label[for='submit'] {
    grid-area: 5 / 1 / 6 / -1;
  } */
`;

export const StyledInput = styled.input`
  margin: 1rem auto;
  border: none;
  border: 1px solid red;
  z-index: 7;
  text-align: left;
`;

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) =>
    flexin('space-evenly', 'flex-start', 'column')}
  width: 60%;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid black;
  z-index: 7;
`;
