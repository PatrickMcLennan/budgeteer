import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import ActionButton from '../ActionButton';

afterEach(cleanup);

const currentActions = 0;
const getUser = jest.fn();

const renderActionButton = () =>
  render(
    <ThemeProvider theme={theme}>
      <ActionButton currentActions={currentActions} action={getUser} />
    </ThemeProvider>
  );

test('<ActionButton action={getUser} />', async () => {
  const { getByTestId } = renderActionButton();
  const button = getByTestId('actionButton');
  const logInSVG = getByTestId('logInSVG');

  // Content
  expect(button).toBeInTheDocument();
  expect(button).toContainElement(logInSVG);

  // Styles
  expect(button).toHaveStyleRule('position', 'absolute');
  expect(button).toHaveStyleRule('border-radius', '100%');
  expect(button).toHaveStyleRule('bottom', '5vh');
  expect(button).toHaveStyleRule('right', '5vh');

  fireEvent.click(button);

  await wait(() => {
    expect(getUser).toBeCalledTimes(1);
  });
});
