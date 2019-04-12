import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import Message from '../Message';

afterEach(cleanup);

const renderActionMessage = () =>
  render(
    <ThemeProvider theme={theme}>
      <Message success={false} error={true} message="This has been a failure" />
    </ThemeProvider>
  );

test('<Logo />', () => {
  const { getByTestId } = renderActionMessage();
  const actionMessage = getByTestId('actionMessage');
  const message = getByTestId('actionMessage__message');

  // Content
  // expect(actionMessage).toBeInTheDocument();
  expect(message.textContent).toBe('This has been a failure');

  // Styles
});
