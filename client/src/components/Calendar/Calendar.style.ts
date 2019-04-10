import styled from 'styled-components';
import { conditionalExpression } from '@babel/types';

export const StyledH6 = styled.h6`
  font-size: 2.5rem;
  border: 1px solid red;
  color: black;
`;
export const StyledGrid = styled.section`
  ${({ theme: { flexin } }: any) => flexin()};
  background-image: radial-gradient(
    ${({ theme: { colors } }: any) => colors.mainBlue} 60%,
    ${({ theme: { colors } }: any) => colors.mainGreen}
  );
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
`;
