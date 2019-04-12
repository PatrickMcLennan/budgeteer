import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import Event from '../Event';

afterEach(cleanup);

export const fakeEvent = {
  name: 'Dinner with the Queen',
  location: 'England',
  description: 'be polite',
  id: 'mongoId',
  year: 2020,
  month: 2,
  day: 2,
  date: 8,
  startTime: 5,
  endTime: 7,
  cost: 20
};

const renderEvent = () =>
  render(
    <ThemeProvider theme={theme}>
      <Event {...fakeEvent} />
    </ThemeProvider>
  );

test('<Event {...fakeEvent} />', () => {
  const { getByTestId } = renderEvent();
  const event = getByTestId('event');
  const name = getByTestId('event__name');
  const location = getByTestId('event__location');
  const description = getByTestId('event__description');
  const date = getByTestId('event__date');
  const startTime = getByTestId('event__startTime');
  const endTime = getByTestId('event__endTime');
  const cost = getByTestId('event__cost');

  // Content
  expect(name.textContent).toBe('Dinner with the Queen');
  expect(location.textContent).toBe('England');
  expect(description.textContent).toBe('be polite');
  expect(date.textContent).toBe('Tuesday March 8 2020');
  expect(startTime.textContent).toBe('5 A.M');
  expect(endTime.textContent).toBe('7 A.M');
  expect(cost.textContent).toBe('$20');

  // Styles
});
