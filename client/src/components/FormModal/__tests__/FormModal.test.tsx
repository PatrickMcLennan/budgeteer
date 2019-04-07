import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { IEvent } from '../../../utils/dictionary';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import FormModal from '../FormModal';

afterEach(cleanup);

const renderFormModal = () =>
  render(
    <ThemeProvider theme={theme}>
      <FormModal />
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
  const now = new Date();

  expect(form).toBeInTheDocument();

  inputs.forEach((input: HTMLInputElement) => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveStyleRule('border-radius', '2.5%');
  });

  expect(name.textContent).toBe('');
  expect(location.textContent).toBe('');
  expect(description.textContent).toBe('');
  expect(year.value).toBe(now.getFullYear().toString());
  expect(month.value).toBe(now.getMonth().toString());
  expect(day.value).toBe(now.getDay().toString());
  expect(date.value).toBe(now.getDate().toString());
  expect(startTime.value).toBe(now.getHours().toString());
  expect(endTime.value).toBe((now.getHours() + 3).toString());
  expect(cost.value).toBe((0).toString());
});
