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
  delayTime: number;
}

class Calendar extends React.Component<IProps, IState> {
  state = {
    delayTime: 100
  };

  incrementAnimationDelay: Function = (): void => {
    const { events } = this.props;
    events
      ? this.setState({ delayTime: this.state.delayTime * events.length })
      : this.setState({ delayTime: 0.2 });
  };

  resetAnimationDelay: Function = (): void => {
    const { currentActions } = this.props;
    if (currentActions !== 1) {
      this.setState({ delayTime: 0 });
    }
  };

  render(): JSX.Element {
    const { delayTime } = this.state;
    const { currentActions, events } = this.props;
    return (
      <StyledGrid data-testid="calendar">
        <Nav />
        <StyledH6
          data-testid="calendar__noEventMessage"
          visible={currentActions === 1 && events.length === 0}
          invisible={events.length >= 1}>
          You have an empty schedule!
        </StyledH6>
        {events.length >= 1 &&
          events.map(
            (event: IEvent): any => (
              <Event
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
