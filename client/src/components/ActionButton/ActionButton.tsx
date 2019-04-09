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
    displays.set(1, <h6>x</h6>); // add event, css rotate into +
    displays.set(2, <h6>+</h6>); // cancel action, css rotate into x

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

// currentActions legend:
// 0: Login modal, no user
// 1: Calendar view, actionbutton prompting Form Modal
// 2: Form modal is open, action button cancelling & closing
