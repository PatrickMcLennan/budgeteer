import styled from 'styled-components';

interface StyledFormProps {
  visible: boolean;
}

export const Backdrop = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  z-index: 6;
  background: rgba(0, 0, 0, 0.25);
  transform-origin: 100%;
  transition: all 0.35s;
  transform: scaleX(0);

  ${(props: StyledFormProps) => props.visible && `transform: scale(1);`};
`;

export const StyledForm = styled.form`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  background-color: rgba(255, 255, 255, 0.25);
  margin: 25vh 25vw;
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;

  transform-style: preserve-3d;
  transition: all 0.5s;
  opacity: 0;
  transform: translateY(-100%);
  ${(props: StyledFormProps) =>
    props.visible && `transform: translateY(0); opacity: 1;`};
`;

export const StyledInput = styled.input`
  grid-area: 1 / 1 / -1 / -1;
  z-index: 7;
`;

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) => flexin('center', 'flex-start', 'column')}
`;
