import * as React from 'react';
import Event from '../Event/Event';
import { IEvent } from '../../utils/dictionary';
import { StyledGrid } from './Calendar.style';

interface IProps {
  events: IEvent[];
}

class Calendar extends React.Component<IProps, {}> {
  render() {
    const { events } = this.props;
    return (
      <StyledGrid data-testid="calendar">
        {events.length === 0 ? (
          <h6 data-testid="calendar__noEventMessage">
            You have an empty schedule!
          </h6>
        ) : (
          events.map(
            ({
              name,
              location,
              description,
              year,
              month,
              day,
              startTime,
              endTime,
              cost,
              id
            }: IEvent) => (
              <Event
                name={name}
                location={location}
                description={description}
                year={year}
                month={month}
                day={day}
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
  }
}

export default Calendar;
