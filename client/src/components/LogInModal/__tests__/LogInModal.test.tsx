import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import LogInModal from '../LogInModal';

afterEach(cleanup);

const renderLogInModal = () =>
  render(
    <ThemeProvider theme={theme}>
      <LogInModal currentActions={1} />
    </ThemeProvider>
  );

test('<LogInModal />', () => {
  const { getByTestId } = renderLogInModal();
  const modal = getByTestId('logInModal');
  const svgBox = getByTestId('logInModal__svgBox');
  const [githubSVG, linkedInSVG] = [
    getByTestId('githubSVG'),
    getByTestId('linkedInSVG')
  ];

  // Content
  expect(modal).toContainElement(svgBox);
  expect(svgBox).toContainElement(githubSVG);
  expect(svgBox).toContainElement(linkedInSVG);

  // Styles
  expect(modal).toHaveStyleRule('text-align', 'center');
});
