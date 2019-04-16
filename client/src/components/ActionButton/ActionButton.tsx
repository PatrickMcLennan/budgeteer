import * as React from 'react';
import { StyledButton, StyledH6 } from './ActionButton.style';
import LogInSVG from '../SVG/LogInSVG';

interface IProps {
  currentActions: number;
  action: Function;
}

const ActionButton: React.SFC<IProps> = ({
  action,
  currentActions
}): JSX.Element => (
  <StyledButton
    data-testid="actionButton"
    onClick={action}
    colorScheme={currentActions}
    animateIn={currentActions >= 1.75}
    animateOut={currentActions <= 1.25}>
    {currentActions === 0 ? (
      <LogInSVG />
    ) : (
      <StyledH6
        colorScheme={currentActions}
        animateIn={currentActions >= 1.75}
        animateOut={currentActions <= 1.25}>
        +
      </StyledH6>
    )}
  </StyledButton>
);

export default ActionButton;
