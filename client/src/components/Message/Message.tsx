import * as React from 'react';
import { StyledDiv, StyledP } from './Message.style';

interface IProps {
  success: boolean;
  error: boolean;
  message: string;
}

const Message: React.SFC<IProps> = ({ success, error, message }) => (
  <StyledDiv data-testid="actionMessage" success={success} error={error}>
    <StyledP success={success} data-testid="actionMessage__message">
      {message}
    </StyledP>
  </StyledDiv>
);

export default Message;
