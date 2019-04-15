import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledH2,
  Backdrop
} from './FormModal.style';
import {
  WEEKDAYSnumber,
  WEEKDAYSstring,
  MONTHSnumber,
  MONTHSstring
} from '../../utils/datesMaps';

interface IProps {
  event: IEvent | null;
  createNewEvent: Function;
  returnToCalendar: Function;
  currentActions: number;
  editEvent: Function;
  deleteEvent: Function;
}

class FormModal extends React.Component<IProps, IEvent> {
  state: IEvent = {
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
  };

  componentWillMount(): void {
    const { event } = this.props;
    if (event) {
      return this.setState({ ...event });
    }
  }

  handleChange: Function = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  handleSubmit: Function = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const {
      createNewEvent,
      event,
      editEvent,
      returnToCalendar
    }: IProps = this.props;
    event ? await editEvent(this.state) : await createNewEvent(this.state);
    return returnToCalendar();
  };

  render(): JSX.Element {
    const { currentActions } = this.props;
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
    }: IEvent = this.state;
    return (
      <>
        <StyledForm
          data-testid="form"
          onSubmit={this.handleSubmit}
          render={currentActions === 2}>
          <StyledH2>{name.length >= 1 ? name : ` . . `}</StyledH2>
          <StyledLabel htmlFor="name" data-testid="form__label">
            <p>Name:</p>
            <StyledInput
              placeholder="Get laundry money"
              data-testid="form__name"
              type="text"
              value={name}
              id="name"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="location" data-testid="form__label">
            <p>Location:</p>
            <StyledInput
              placeholder="ATM by work"
              data-testid="form__location"
              type="text"
              value={location}
              id="location"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="description" data-testid="form__label">
            <p>Notes:</p>
            <StyledInput
              placeholder="loonies & quarters"
              data-testid="form__description"
              type="text"
              value={description}
              id="description"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="year" data-testid="form__label">
            <p>Year:</p>
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
            <p>Month:</p>
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
            <p>Day:</p>
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
            <p>day:</p>
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
            <p>Start:</p>
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
            <p>End:</p>
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
            <p>$</p>
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
        <Backdrop onClick={this.handleSubmit} render={currentActions === 2} />
      </>
    );
  }
}

export default FormModal;
