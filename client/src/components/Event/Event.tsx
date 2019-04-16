import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledDiv, StyledP, StyledButton } from './Event.style';
import { WEEKDAYSnumber, MONTHSnumber } from '../../utils/datesMaps';

interface IProps {
  showEventForm: Function;
  setCurrentEvent: Function;
  delayTime: number;
  event: IEvent;
}

interface IState {
  triggerAnimation: boolean;
}

class Event extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentWillMount(): void {
    setTimeout(
      (): void => this.setState({ triggerAnimation: true }),
      this.props.delayTime
    );
  }

  openEditForm = (event: IEvent): void => {
    const { setCurrentEvent, showEventForm } = this.props;
    setCurrentEvent(event);
    return showEventForm();
  };

  formatTime = (num: number): string => {
    return num > 12 ? `${num - 12} P.M` : `${num} A.M`;
  };
  render(): JSX.Element {
    const { triggerAnimation } = this.state;
    const { event } = this.props;
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
    }: IEvent = event;
    return (
      <StyledDiv data-testid="event" triggerAnimation={triggerAnimation}>
        <StyledP data-testid="event__date">
          {WEEKDAYSnumber.get(day)} {MONTHSnumber.get(month)} {date} {year}
        </StyledP>
        <StyledP data-testid="event__name">{name}</StyledP>
        <StyledP data-testid="event__location">{location}</StyledP>
        <StyledP data-testid="event__description">{description}</StyledP>
        <StyledP data-testid="event__startTime">
          {this.formatTime(startTime)}
        </StyledP>
        <StyledP data-testid="event__endTime">
          {this.formatTime(endTime)}
        </StyledP>
        <StyledP data-testid="event__cost">${cost}</StyledP>
        <StyledButton onClick={(): void => this.openEditForm(event)}>
          Edit
        </StyledButton>
      </StyledDiv>
    );
  }
}

export default Event;
