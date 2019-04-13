import * as React from 'react';
import StyledButton from './ActionButton.style';
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
    colorScheme={currentActions}>
    {currentActions === 0 ? <LogInSVG /> : <h6>+</h6>}
  </StyledButton>
);

export default ActionButton;

// currentActions legend:
// 0: Login modal, no user
// 1: Calendar view, actionbutton prompting Form Modal
// 2: Form modal is open, action button cancelling & closing
