import * as React from 'react';
import { StyledDiv, StyledP } from './Message.style';

interface IProps {
  success: boolean;
  error: boolean;
  message: string;
}

const Message: React.SFC<IProps> = ({ success, error, message }) => (
  <StyledDiv data-testid="actionMessage">
    <StyledP
      success={success}
      error={error}
      data-testid="actionMessage__message">
      {message}
    </StyledP>
  </StyledDiv>
);

export default Message;
