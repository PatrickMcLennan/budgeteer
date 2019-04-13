import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledDiv, StyledP } from './Event.style';
import { WEEKDAYSnumber, MONTHSnumber } from '../../utils/datesMaps';

class Event extends React.Component<IEvent, {}> {
  componentWillMount() {
    console.log('hello');
  }

  formatTime = (num: number): string => {
    return num > 12 ? `${num - 12} P.M` : `${num} A.M`;
  };
  render(): JSX.Element {
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
        <StyledP data-testid="event__name">{name}</StyledP>
        <StyledP data-testid="event__location">{location}</StyledP>
        <StyledP data-testid="event__description">{description}</StyledP>
        <StyledP data-testid="event__date">
          {WEEKDAYSnumber.get(day)} {MONTHSnumber.get(month)} {date} {year}
        </StyledP>
        <StyledP data-testid="event__startTime">
          {this.formatTime(startTime)}
        </StyledP>
        <StyledP data-testid="event__endTime">
          {this.formatTime(endTime)}
        </StyledP>
        <StyledP data-testid="event__cost">${cost}</StyledP>
      </StyledDiv>
    );
  }
}

export default Event;
