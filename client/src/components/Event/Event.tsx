import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledDiv } from './Event.style';
import { WEEKDAYSnumber, MONTHSnumber } from '../../utils/datesMaps';

class Event extends React.Component<IEvent, {}> {
  formatTime = (num: number): string => {
    return num > 12 ? `${num - 12} P.M` : `${num} A.M`;
  };
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
          {WEEKDAYSnumber.get(day)} {MONTHSnumber.get(month)} {date} {year}
        </p>
        <p data-testid="event__startTime">{this.formatTime(startTime)}</p>
        <p data-testid="event__endTime">{this.formatTime(endTime)}</p>
        <p data-testid="event__cost">${cost}</p>
      </StyledDiv>
    );
  }
}

export default Event;
