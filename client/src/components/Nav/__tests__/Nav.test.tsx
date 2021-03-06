import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import Nav from '../Nav';

afterEach(cleanup);

const renderNav = () =>
  render(
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );

test('<Nav showMenu="false" />', () => {
  const { getByTestId } = renderNav();
  const nav = getByTestId('nav');
  const logo = getByTestId('logo');

  // Content
  expect(nav).toContainElement(logo);
  // Styles
  expect(nav).toHaveStyleRule('text-align', 'center');
});
