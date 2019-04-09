import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledInput } from './FormModal.style';

interface IProps {
  event?: IEvent;
  createNewEvent: Function;
}

class FormModal extends React.Component<IProps, IEvent> {
  state: IEvent = {
    name: this.props.event ? this.props.event.name : '',
    location: this.props.event ? this.props.event.location : '',
    description: this.props.event ? this.props.event.description : '',
    year: this.props.event ? this.props.event.year : new Date().getFullYear(),
    month: this.props.event ? this.props.event.month : new Date().getMonth(),
    day: this.props.event ? this.props.event.day : new Date().getDay(),
    date: this.props.event ? this.props.event.date : new Date().getDate(),
    startTime: this.props.event
      ? this.props.event.startTime
      : new Date().getHours(),
    endTime: this.props.event
      ? this.props.event.endTime
      : new Date().getHours() + 3,
    cost: this.props.event ? this.props.event.cost : 0
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { id, value } = e.target;
    value = value.trim();
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { createNewEvent } = this.props;
    e.preventDefault();
    return createNewEvent(this.state);
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
    }: IEvent = this.state;
    return (
      <form data-testid="form" onSubmit={this.handleSubmit}>
        <StyledInput
          data-testid="form__name"
          type="text"
          value={name}
          id="name"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__location"
          type="text"
          value={location}
          id="location"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__description"
          type="text"
          value={description}
          id="description"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__year"
          type="number"
          value={year}
          id="year"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__month"
          type="number"
          value={month}
          id="month"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__day"
          type="number"
          value={day}
          id="day"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__date"
          type="number"
          value={date}
          id="date"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__startTime"
          type="number"
          value={startTime}
          id="startTime"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__endTime"
          type="number"
          value={endTime}
          id="endTime"
          onChange={this.handleChange}
          required
        />
        <StyledInput
          data-testid="form__cost"
          type="number"
          value={cost}
          id="cost"
          onChange={this.handleChange}
          required
        />
      </form>
    );
  }
}

export default FormModal;
