import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { IEvent } from '../../../utils/dictionary';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import Calendar from '../Calendar';

afterEach(cleanup);

const events: [] = [];
const showEventForm: Function = jest.fn();

const renderCalendar = () =>
  render(
    <ThemeProvider theme={theme}>
      <Calendar
        events={events}
        showEventForm={showEventForm}
        currentActions={1}
      />
    </ThemeProvider>
  );

test('<Calendar noEvents/>', () => {
  const { queryByTestId, getByTestId } = renderCalendar();
  const calendar = getByTestId('calendar');
  const event = queryByTestId('event');
  const noEventMessage = queryByTestId('calendar__noEventMessage');

  expect(calendar).toContainElement(noEventMessage);
  expect(event).not.toBeInTheDocument();
  expect(noEventMessage.textContent).toBe('You have an empty schedule!');
});
