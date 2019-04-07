import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledDiv } from './Event.style';

class Event extends React.Component<IEvent, {}> {
  render() {
    const {
      name,
      location,
      description,
      year,
      month,
      day,
      date,
      startTime,
      endTime,
      cost
    }: IEvent = this.props;
    return (
      <StyledDiv data-testid="event">
        <p data-testid="event__name">{name}</p>
        <p data-testid="event__location">{location}</p>
        <p data-testid="event__description">{description}</p>
        <p data-testid="event__date">
          {day} / {month} / {date} / {year}
        </p>
        <p data-testid="event__startTime">{startTime}</p>
        <p data-testid="event__endTime">{endTime}</p>
        <p data-testid="event__cost">${cost}</p>
      </StyledDiv>
    );
  }
}

export default Event;
