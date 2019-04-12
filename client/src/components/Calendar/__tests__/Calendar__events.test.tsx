import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { IEvent } from '../../../utils/dictionary';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/resets.style';
import Calendar from '../Calendar';

afterEach(cleanup);

const events: IEvent[] = [
  {
    name: 'Dinner with the Queen',
    location: 'England',
    description: 'be polite',
    id: 'mongoId1',
    year: 2020,
    month: 2,
    day: 2,
    date: 4,
    startTime: 5,
    endTime: 7,
    cost: 20
  },
  {
    name: 'Blue Jays vs Somebody',
    location: 'Toronto',
    description: 'be early, it will be a long line',
    id: 'mongoId2',
    year: 2019,
    month: 6,
    day: 10,
    date: 5,
    startTime: 7,
    endTime: 11,
    cost: 100
  },
  {
    name: 'Coffee with friends',
    location: 'Mulberry Cafe',
    description: '',
    id: 'mongoId3',
    year: 2019,
    month: 3,
    day: 28,
    date: 6,
    startTime: 12,
    endTime: 1,
    cost: 6
  }
];

const renderCalendar = () =>
  render(
    <ThemeProvider theme={theme}>
      <Calendar events={events} />
    </ThemeProvider>
  );

test('<Calendar events/>', () => {
  const { queryByTestId, getByTestId, queryAllByTestId } = renderCalendar();
  const calendar = getByTestId('calendar');
  const renderedEvents = queryAllByTestId('event');
  const noEventMessage = queryByTestId('calendar__noEventMessage');

  expect(calendar).not.toContainElement(noEventMessage);
  renderedEvents.forEach((event: IEvent) => {
    expect(event).toBeInTheDocument();
  });
  expect(renderedEvents.length).toBe(events.length);
});
