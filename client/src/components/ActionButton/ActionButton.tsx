import * as React from 'react';
import StyledButton from './ActionButton.style';
import LogInSVG from '../SVG/LogInSVG';

interface IProps {
  display: number;
  action: Function;
}

interface IState {
  display: number;
}

class ActionButton extends React.Component<IProps, IState> {
  state: IState = {
    display: this.props.display
  };

  getDisplayMap = (num: number) => {
    const displays = new Map<number, any>();
    displays.set(0, <LogInSVG />);
    displays.set(1, 'createEvent');

    return displays.get(num);
  };

  render() {
    const { display } = this.state;
    const { action } = this.props;
    return (
      <StyledButton data-testid="actionButton" onClick={action}>
        {this.getDisplayMap(display)}
      </StyledButton>
    );
  }
}

export default ActionButton;
