import * as React from 'react';
import {
  StyledModal,
  StyledSVGBox,
  StyledH2,
  StyledP
} from './LogInModal.style';
import GithubSVG from '../SVG/GitHubSVG';
import LinkedInSVG from '../SVG/LinkedInSVG';

interface IProps {
  currentActions: number;
}

interface IState {
  rendered: boolean;
}

class LogInModal extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { currentActions } = this.props;
    return (
      <StyledModal
        data-testid="logInModal"
        triggerAnimation={currentActions !== 0}>
        <StyledH2>Plan your day with budgeteer</StyledH2>

        <StyledSVGBox data-testid="logInModal__svgBox">
          <GithubSVG />
          <LinkedInSVG />
        </StyledSVGBox>

        <StyledP>Made By Patrick McLennan</StyledP>

        <StyledP>
          Use Facebook to Log In or Create an account and get started instantly
        </StyledP>
      </StyledModal>
    );
  }
}
export default LogInModal;
