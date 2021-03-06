import * as React from 'react';
import Event from '../Event/Event';
import { IEvent } from '../../utils/dictionary';
import { StyledGrid, StyledH6 } from './Calendar.style';
import Nav from '../Nav/Nav';

interface IProps {
  events: IEvent[];
  currentActions: number;
  showEventForm: Function;
  setCurrentEvent: Function;
}

interface IState {
  delayTime: number;
}

class Calendar extends React.Component<IProps, IState> {
  state = {
    delayTime: 150
  };

  render(): JSX.Element {
    const { delayTime } = this.state;
    const {
      currentActions,
      events,
      showEventForm,
      setCurrentEvent
    } = this.props;
    return (
      <StyledGrid data-testid="calendar">
        <Nav />
        {currentActions === 1 && events.length === 0 && (
          <StyledH6
            data-testid="calendar__noEventMessage"
            visible={currentActions === 1 && events.length === 0}
            invisible={events.length >= 1}>
            You have an empty schedule!
          </StyledH6>
        )}
        {events.length >= 1 &&
          events.map(
            (event: IEvent): any => (
              <Event
                setCurrentEvent={setCurrentEvent}
                showEventForm={showEventForm}
                event={event}
                delayTime={delayTime * events.indexOf(event)}
                key={event.id}
              />
            )
          )}
      </StyledGrid>
    );
  }
}

export default Calendar;
