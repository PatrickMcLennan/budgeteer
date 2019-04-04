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
  visible: boolean;
}

const LogInModal = ({ visible }: IProps) => (
  <StyledModal data-testid="logInModal" visible={visible}>
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

export default LogInModal;
