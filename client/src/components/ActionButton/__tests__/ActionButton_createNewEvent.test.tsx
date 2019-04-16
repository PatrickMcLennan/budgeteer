import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import ActionButton from '../ActionButton';

afterEach(cleanup);

const currentActions = 1;
const createNewEvent = jest.fn();

const renderActionButton = () =>
  render(
    <ThemeProvider theme={theme}>
      <ActionButton currentActions={currentActions} action={createNewEvent} />
    </ThemeProvider>
  );

test('<ActionButton action={createNewAction} />', async () => {
  const { getByTestId, queryByTestId } = renderActionButton();
  const button = getByTestId('actionButton');
  const logInSVG = queryByTestId('logInSVG');

  // Content
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe('+');
  expect(button).not.toContainElement(logInSVG);

  // Styles
  expect(button).toHaveStyleRule('position', 'fixed');
  expect(button).toHaveStyleRule('border-radius', '100%');
  expect(button).toHaveStyleRule('bottom', '5vh');
  expect(button).toHaveStyleRule('right', '5vh');

  fireEvent.click(button);

  await wait(() => {
    expect(createNewEvent).toBeCalledTimes(1);
  });
});
