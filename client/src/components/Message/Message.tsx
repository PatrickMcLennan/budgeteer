import * as React from 'react';
import { StyledDiv } from './Message.style';

interface IProps {
  result: boolean;
  message: string;
}

const Message = ({ result, message }: IProps) => (
  <StyledDiv colorScheme={result} data-testid="actionMessage">
    <p data-testid="actionMessage__message">{message}</p>
  </StyledDiv>
);

export default Message;
