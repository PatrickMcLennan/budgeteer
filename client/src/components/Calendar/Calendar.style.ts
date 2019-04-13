import styled from 'styled-components';

interface StyledH6Props {
  visible: boolean;
  invisible: boolean;
}

export const StyledH6 = styled.h6`
  grid-area: 2 / 1 / -1 / -1;
  text-align: center;
  margin-top: 1.5rem;
  color: black;
  font-size: 2.5rem;
  font-weight: 100;
  visibility: none;
  transition: opacity 4.5s;
  opacity: 0;

  ${(props: StyledH6Props) =>
    props.visible && `opacity: .5; visible: visible;`};

  ${(props: StyledH6Props) => props.invisible && `display: none;`}
`;

export const StyledGrid = styled.section`
  ${({ theme: { elevation } }: any) => elevation.mainInset}
  position: relative;
  display: grid;
  margin: 2.5vw;
  padding: 1rem;
  grid-template-rows: repeat(auto-fill, 220px);
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-area: 1 / 1 / -1 / -1;
  grid-auto-flow: row;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    ${({ theme: { colors } }: any) => colors.mainBlue} 5%,
    white 95%
  );
  z-index: 5;
`;
