import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import LinkedInSVG from '../LinkedInSVG';

afterEach(cleanup);

const renderLinkedInSVG = () =>
  render(
    <ThemeProvider theme={theme}>
      <LinkedInSVG />
    </ThemeProvider>
  );

test('<LinkedInSVG />', () => {
  const { getByTestId } = renderLinkedInSVG();
  const [svg, a] = [getByTestId('linkedInSVG'), getByTestId('linkedInSVG__a')];

  // Content
  expect(a).toContainElement(svg);
  expect(a.getAttribute('href')).toBe(
    'https://www.linkedin.com/in/patrick-mclennan-42002a172'
  );

  // Style
  expect(svg).toHaveStyleRule('height', '5rem');
  expect(svg).toHaveStyleRule('width', '5rem');
});
