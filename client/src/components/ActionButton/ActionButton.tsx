import * as React from 'react';
import StyledButton from './ActionButton.style';
import LogInSVG from '../SVG/LogInSVG';

interface IProps {
  currentActions: number;
  action: Function;
}

interface IState {
  display: number;
}

class ActionButton extends React.Component<IProps, IState> {
  getDisplayMap = (num: number) => {
    const displays = new Map<number, any>();
    displays.set(0, <LogInSVG />);
    displays.set(1, 'createEvent');

    return displays.get(num);
  };

  render() {
    const { action, currentActions } = this.props;
    return (
      <StyledButton data-testid="actionButton" onClick={action}>
        {this.getDisplayMap(currentActions)}
      </StyledButton>
    );
  }
}

export default ActionButton;
