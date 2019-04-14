import styled from 'styled-components';

interface StyledFormProps {
  visible: boolean;
}

export const StyledH2 = styled.h2`
  font-size: 4rem;
  font-style: italic;
  color: rgba(0, 0, 0, 0.35);
  line-height: 5;
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
  grid-template-columns: repeat(auto-fill, minmax(200px 350px));

  padding: 5vh 5vw;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 10vh 10vw;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;

  transition: all 0.5s;
  opacity: 0;
  transform: translateY(-100%);
  transition-delay: 0.1s;
  ${(props: StyledFormProps) =>
    props.visible && `transform: translateY(0); opacity: 1;`};
`;

export const StyledInput = styled.input`
  /* grid-area: 1 / 1 / -1 / -1; */
  z-index: 7;
`;

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) => flexin('center', 'flex-start', 'column')}
  margin: 1rem;
  width: 60%;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
`;
