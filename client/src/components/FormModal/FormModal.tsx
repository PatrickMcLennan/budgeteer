import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import { StyledInput } from './FormModal.style';

interface IProps {
  event?: IEvent;
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

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { id, value } = e.target;
    value = value.trim();
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('hello');
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
