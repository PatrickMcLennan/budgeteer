import * as React from 'react';
import Event from '../Event/Event';
import { IEvent } from '../../utils/dictionary';
import { StyledGrid, StyledH6 } from './Calendar.style';
import Nav from '../Nav/Nav';

interface IProps {
  events: IEvent[] | null;
  currentActions: number;
}

interface IState {
  eventsExist: boolean;
}

class Calendar extends React.Component<IProps, IState> {
  state = {
    eventsExist: false
  };

  componentDidMount(): void {
    this.props.events.length === 0
      ? this.setState({ eventsExist: false })
      : this.setState({ eventsExist: true });
  }

  render(): JSX.Element {
    const { currentActions, events } = this.props;
    const { eventsExist } = this.state;
    return (
      <StyledGrid data-testid="calendar">
        <Nav />
        <StyledH6
          data-testid="calendar__noEventMessage"
          visible={currentActions === 1 && !eventsExist}>
          You have an empty schedule!
        </StyledH6>
        {events.length >= 1 &&
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
          )}
      </StyledGrid>
    );
  }
}

export default Calendar;
