import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledDiv } from './Event.style';

class Event extends React.Component<IEvent, {}> {
  getDuration = (end: number, start: number): number => {
    if (end < start) {
      end = end + 12;
    }
    const duration = end - start;
    return duration;
  };

  render() {
    const {
      name,
      location,
      description,
      year,
      month,
      day,
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
          {year}/{month}/{day}
        </p>
        <p data-testid="event__startTime">{startTime}</p>
        <p data-testid="event__endTime">{endTime}</p>
        <p data-testid="event__duration">
          {this.getDuration(endTime, startTime)}
        </p>
        <p data-testid="event__cost">${cost}</p>
      </StyledDiv>
    );
  }
}

export default Event;
