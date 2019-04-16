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

  showDate = (date: number, month: number, year: number): string | null => {
    const currentYear = Math.floor(new Date().getFullYear());
    const currentDate = Math.floor(new Date().getDate());
    const currentMonth = Math.floor(new Date().getMonth());
    const currentDay = Math.floor(new Date().getDay());

    if (
      year === currentYear &&
      month === currentMonth &&
      date - currentDate <= 6
    ) {
      return `${WEEKDAYSnumber.get(date - currentDate + currentDay)}`;
    } else {
      return `${MONTHSnumber.get(month)} ${date}, ${year}`;
    }
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
      date,
      startTime,
      endTime,
      cost
    }: IEvent = event;
    return (
      <StyledDiv data-testid="event" triggerAnimation={triggerAnimation}>
        <StyledP data-testid="event__date">
          {this.showDate(date, month, year)}
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
