import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import FormModal from '../FormModal';

afterEach(cleanup);

const createNewEvent = jest.fn();
const returnToCalendar = jest.fn();
const editEvent = jest.fn();
const deleteEvent = jest.fn();

const renderFormModal = () =>
  render(
    <ThemeProvider theme={theme}>
      <FormModal
        event={null}
        currentActions={2}
        createNewEvent={createNewEvent}
        editEvent={editEvent}
        deleteEvent={deleteEvent}
        returnToCalendar={returnToCalendar}
      />
    </ThemeProvider>
  );

test('<FormModal />', async () => {
  const { getByTestId } = renderFormModal();
  const form = getByTestId('form');
  const name = getByTestId('form__name');
  const location = getByTestId('form__location');
  const description = getByTestId('form__description');
  const year = getByTestId('form__year');
  const month = getByTestId('form__month');
  const date = getByTestId('form__date');
  const startTime = getByTestId('form__startTime');
  const endTime = getByTestId('form__endTime');
  const cost = getByTestId('form__cost');
  const submit = getByTestId('form__submit');
  const inputs = [
    name,
    location,
    description,
    year,
    month,
    startTime,
    endTime,
    cost,
    submit
  ];
  const now = new Date();

  expect(form).toBeInTheDocument();

  inputs.forEach((input: HTMLInputElement) => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value');
  });

  expect(name.textContent).toBe('');
  expect(location.textContent).toBe('');
  expect(description.textContent).toBe('');
  expect(year.value).toBe(now.getFullYear().toString());
  expect(month.value).toBe(now.getMonth().toString());
  expect(date.value).toBe(now.getDate().toString());
  expect(startTime.value).toBe(now.getHours().toString());
  expect(endTime.value).toBe((now.getHours() + 3).toString());
  expect(cost.value).toBe((0).toString());
  expect(submit.value).toBe('Create Event');

  fireEvent.change(name, { target: { value: 'test name' } });
  fireEvent.change(location, { target: { value: 'test location' } });
  fireEvent.change(description, { target: { value: 'test description' } });

  fireEvent.submit(form);

  await wait(() => {
    expect(createNewEvent).toBeCalledTimes(1);
    expect(createNewEvent).toReturnWith(undefined);
  });
});
