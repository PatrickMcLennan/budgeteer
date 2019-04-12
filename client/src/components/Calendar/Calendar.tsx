import * as React from 'react';
import Event from '../Event/Event';
import { IEvent } from '../../utils/dictionary';
import { StyledGrid, StyledH6 } from './Calendar.style';

interface IProps {
  events: IEvent[] | null;
}

const Calendar = ({ events }: IProps) => (
  <StyledGrid data-testid="calendar">
    {!events ? (
      <StyledH6 data-testid="calendar__noEventMessage">
        You have an empty schedule!
      </StyledH6>
    ) : (
      events.map(
        ({
          name,
          location,
          description,
          year,
          month,
          day,
          date,
          startTime,
          endTime,
          cost,
          id
        }: IEvent): any => (
          <Event
            name={name}
            location={location}
            description={description}
            year={year}
            month={month}
            day={day}
            date={date}
            startTime={startTime}
            endTime={endTime}
            cost={cost}
            id={id}
            key={id}
          />
        )
      )
    )}
  </StyledGrid>
);

export default Calendar;
