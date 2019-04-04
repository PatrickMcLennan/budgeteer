import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import LogInSVG from '../LogInSVG';

afterEach(cleanup);

const renderLogInSVG = () =>
  render(
    <ThemeProvider theme={theme}>
      <LogInSVG />
    </ThemeProvider>
  );

test('<LogInSVg />', () => {
  const { getByTestId } = renderLogInSVG();
  const svg = getByTestId('logInSVG');

  expect(svg).toBeInTheDocument();
});
