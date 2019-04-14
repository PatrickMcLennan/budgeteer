import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledH2,
  Backdrop
} from './FormModal.style';

interface IProps {
  event: IEvent | null;
  createNewEvent: Function;
  returnToCalendar: Function;
  currentActions: number;
  editEvent: Function;
  deleteEvent: Function;
}

interface IState {
  event: IEvent;
  triggerAnimation: boolean;
}

class FormModal extends React.Component<IProps, IState> {
  state: IState = {
    event: {
      name: '',
      location: '',
      description: '',
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDay(),
      date: new Date().getDate(),
      startTime: new Date().getHours(),
      endTime: new Date().getHours() + 3,
      cost: 0
    },
    triggerAnimation: false
  };

  componentWillMount(): void {
    const { event } = this.props;
    return event
      ? this.setState({ event, triggerAnimation: true })
      : this.setState({ triggerAnimation: true });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const {
      createNewEvent,
      returnToCalendar,
      event,
      editEvent
    }: IProps = this.props;
    event ? await editEvent(this.state) : await createNewEvent(this.state);
    return returnToCalendar();
  };

  render(): JSX.Element {
    const { returnToCalendar, currentActions }: IProps = this.props;
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
    }: IEvent = this.state.event;
    return (
      <>
        <StyledForm
          data-testid="form"
          onSubmit={this.handleSubmit}
          triggerAnimation={currentActions === 2}>
          <StyledH2>{name.length >= 1 ? name : ` . . `}</StyledH2>
          <StyledLabel htmlFor="name" data-testid="form__label">
            Name:
            <StyledInput
              data-testid="form__name"
              type="text"
              value={name}
              id="name"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="location" data-testid="form__label">
            Location:
            <StyledInput
              data-testid="form__location"
              type="text"
              value={location}
              id="location"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="description" data-testid="form__label">
            Description
            <StyledInput
              data-testid="form__description"
              type="text"
              value={description}
              id="description"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="year" data-testid="form__label">
            Year:
            <StyledInput
              data-testid="form__year"
              type="number"
              value={year}
              id="year"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="month" data-testid="form__label">
            Month:
            <StyledInput
              data-testid="form__month"
              type="number"
              value={month}
              id="month"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="day" data-testid="form__label">
            Day:
            <StyledInput
              data-testid="form__day"
              type="number"
              value={day}
              id="day"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="datw" data-testid="form__label">
            day:
            <StyledInput
              data-testid="form__date"
              type="number"
              value={date}
              id="date"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="startTime" data-testid="form__label">
            Start:
            <StyledInput
              data-testid="form__startTime"
              type="number"
              value={startTime}
              id="startTime"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="endtime" data-testid="form__label">
            End:
            <StyledInput
              data-testid="form__endTime"
              type="number"
              value={endTime}
              id="endTime"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="cost" data-testid="form__label">
            $
            <StyledInput
              data-testid="form__cost"
              type="number"
              value={cost}
              id="cost"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="submit" data-testid="form__label">
            <StyledInput
              data-testid="form__submit"
              id="submit"
              type="submit"
              value={this.props.event ? 'Edit Event' : 'Create Event'}
            />
          </StyledLabel>
        </StyledForm>
        <Backdrop onClick={returnToCalendar} visible={currentActions === 2} />
      </>
    );
  }
}

export default FormModal;
