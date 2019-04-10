import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import Logo from '../Logo';

afterEach(cleanup);

const renderLogo = () =>
  render(
    <ThemeProvider theme={theme}>
      <Logo />
    </ThemeProvider>
  );

test('<Logo />', () => {
  const { getByTestId } = renderLogo();
  const logo = getByTestId('logo');

  // Content
  expect(logo.textContent).toBe('budgeteer');

  // Styles
  expect(logo).toHaveStyleRule('font-size', '7.5rem');
  expect(logo).toHaveStyleRule('background-clip', 'text');
  expect(logo).toHaveStyleRule('color', 'transparent');
  expect(logo).toHaveStyleRule(
    'background-image',
    'linear-gradient( to bottom right, #3498db 22.5%, #2ecc71 48.5%, transparent 48.5%, transparent 51.5%, #2ecc71 51.5%, #3498db 77.5% )'
  );
});
