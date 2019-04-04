import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import GithubSVG from '../GitHubSVG';

afterEach(cleanup);

const renderGithubSVG = () =>
  render(
    <ThemeProvider theme={theme}>
      <GithubSVG />
    </ThemeProvider>
  );

test('<LinkedInSVG />', () => {
  const { getByTestId } = renderGithubSVG();
  const [svg, a] = [getByTestId('githubSVG'), getByTestId('githubSVG__a')];

  // Content
  expect(a).toContainElement(svg);
  expect(a.getAttribute('href')).toBe('https://www.github.com/patrickmclennan');

  // Style
  expect(svg).toHaveStyleRule('height', '5rem');
  expect(svg).toHaveStyleRule('width', '5rem');
});
