import * as React from 'react';
import { StyledDiv, StyledP } from './Message.style';

interface IProps {
  result: boolean;
  message: string;
}

const Message = ({ result, message }: IProps) => (
  <StyledDiv data-testid="actionMessage">
    <StyledP colorScheme={result} data-testid="actionMessage__message">
      {message}
    </StyledP>
  </StyledDiv>
);

export default Message;
