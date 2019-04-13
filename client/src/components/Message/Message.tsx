import * as React from 'react';
import { StyledDiv, StyledP } from './Message.style';

interface IProps {
  success: boolean;
  error: boolean;
  message: string;
}

interface IState {
  render: boolean;
}

class Message extends React.Component<IProps, IState> {
  state = {
    render: false
  };
  componentWillMount(): void {
    this.setState({ render: true });
  }

  render(): JSX.Element {
    const { render } = this.state;
    const { success, error, message } = this.props;
    return (
      <StyledDiv
        data-testid="actionMessage"
        render={render}
        success={success}
        error={error}>
        <StyledP
          success={success}
          error={error}
          data-testid="actionMessage__message">
          {message}
        </StyledP>
      </StyledDiv>
    );
  }
}
export default Message;
