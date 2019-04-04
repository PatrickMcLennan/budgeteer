import styled from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme: { borderRadius } }: any) => borderRadius.main}
`;
