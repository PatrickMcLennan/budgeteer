import * as React from 'react';
import { StyledDiv } from './Message.style';

interface IProps {
  result: string;
  data: string;
}

const Message = ({ result, data }: IProps) => (
  <StyledDiv colorScheme={result}>
    <p>{data}</p>
  </StyledDiv>
);

export default Message;
