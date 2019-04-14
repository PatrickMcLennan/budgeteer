import styled from 'styled-components';

interface StyledFormProps {
  visible: boolean;
}

export const StyledH2 = styled.h2`
  text-align: center;
  font-size: 7.5rem;
  font-style: italic;
  color: rgba(0, 0, 0, 0.35);
`;

export const Backdrop = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  z-index: 6;
  background: rgba(0, 0, 0, 0.25);

  transform-origin: bottom;
  transition: all 0.35s;
  transform: scaleY(0);
  ${(props: StyledFormProps) => props.visible && `transform: scaleY(1);`};
`;

export const StyledForm = styled.form`
  ${({ theme: { elevation } }: any) => elevation.mainInset}

  display: grid;
  grid-template-rows: 100px repeat(auto-fit, 100px);
  grid-template-columns: repeat(auto-fit, 100px);

  padding: 2.5vh 5vw;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  margin: auto 5vw;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;

  transition: all 0.5s;
  opacity: 0;
  transform: translateY(-100%);
  transition-delay: 0.1s;
  ${(props: StyledFormProps) =>
    props.visible && `transform: translateY(0); opacity: 1;`};

  & > * {
    align-self: stretch;
    justify-self: stretch;
  }

  & h2 {
    grid-area: 1 / 1 / 2 / -1;
  }

  & label[for='name'] {
    grid-area: 2 / 1 / 3 / 3;
  }
  /* 
  & label[for='location'] {
    grid-area: 3 / 1 / 4 / 3;
  }

  & label[for='description'] {
    grid-area: 2 / 4 / 3 / -1;
  }

  & label[for='year'] {
    grid-area: 3 / 2 / 4 / 3;
  }

  & label[for='month'] {
    grid-area: 4 / 2 / 5 / 3;
  }

  & label[for='day'] {
    grid-area: 5 / 3 / 3 / 4;
  }

  & label[for='date'] {
    grid-area: 2 / 3 / 3 / -1;
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
  background: transparent;
  border-bottom: 1px solid red;
  z-index: 7;
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
`;
