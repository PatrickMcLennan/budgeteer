import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { fakeEvent } from '../../Event/__tests__/Event.test';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import FormModal from '../FormModal';

afterEach(cleanup);

const createNewEvent = jest.fn();
const returnToCalendar = jest.fn();

const renderFormModal = () =>
  render(
    <ThemeProvider theme={theme}>
      <FormModal
        createNewEvent={createNewEvent}
        event={fakeEvent}
        returnToCalendar={returnToCalendar}
      />
    </ThemeProvider>
  );

test('<FormModal />', () => {
  const { getByTestId } = renderFormModal();
  const form = getByTestId('form');
  const name = getByTestId('form__name');
  const location = getByTestId('form__location');
  const description = getByTestId('form__description');
  const year = getByTestId('form__year');
  const month = getByTestId('form__month');
  const day = getByTestId('form__day');
  const date = getByTestId('form__date');
  const startTime = getByTestId('form__startTime');
  const endTime = getByTestId('form__endTime');
  const cost = getByTestId('form__cost');
  const inputs = [
    name,
    location,
    description,
    year,
    month,
    day,
    startTime,
    endTime,
    cost
  ];

  expect(form).toBeInTheDocument();

  inputs.forEach((input: HTMLInputElement) => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveStyleRule('border-radius', '2.5%');
  });

  expect(name.value).toBe('Dinner with the Queen');
  expect(location.value).toBe('England');
  expect(description.value).toBe('be polite');
  expect(year.value).toBe('2020');
  expect(month.value).toBe('2');
  expect(day.value).toBe('2');
  expect(date.value).toBe('8');
  expect(startTime.value).toBe('5');
  expect(endTime.value).toBe('7');
  expect(cost.value).toBe('20');
});
