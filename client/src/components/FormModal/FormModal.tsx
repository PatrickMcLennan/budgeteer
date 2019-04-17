import * as React from 'react';
import { IEvent } from '../../utils/dictionary';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledH2,
  StyledButtonBox,
  Backdrop
} from './FormModal.style';
import { MONTHSstring, MONTHarray } from '../../utils/datesMaps';

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
    year: Math.floor(new Date().getFullYear()),
    month: Math.floor(new Date().getMonth()),
    date: Math.floor(new Date().getDate()),
    startTime: Math.floor(new Date().getHours()),
    endTime: Math.floor(new Date().getHours() + 3),
    cost: 0
  };

  componentWillMount(): void {
    const { event } = this.props;
    if (event) {
      return this.setState({ ...event });
    }
  }

  handleChange: Function = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    let { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  handleButtonChange: Function = (key: string, value: number): void => {
    return this.setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  randomPlaceholders: Function = (): string[] => {
    const placeholderMap: Map<number, string[]> = new Map();
    placeholderMap.set(0, [
      'Get laundry money',
      'bank by work',
      'loonies & quarters'
    ]);
    placeholderMap.set(1, [
      'donate to LOST org',
      'online',
      'www.wearelost.org/'
    ]);
    placeholderMap.set(2, [
      'farmers market',
      'brant street',
      'check for avocados'
    ]);
    placeholderMap.set(3, ['groceries', 'no frills', 'milk, cheese, pasta...']);
    placeholderMap.set(4, ['oil change', 'sonic auto', 'bring a book']);

    return placeholderMap.get(Math.floor(Math.random() * placeholderMap.size));
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
    const { currentActions, returnToCalendar } = this.props;
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
    }: IEvent = this.state;
    const currentYear: number = Math.floor(new Date().getFullYear());
    const placeholders: string[] = this.randomPlaceholders();

    return (
      <>
        <StyledForm
          data-testid="form"
          onSubmit={this.handleSubmit}
          animateIn={currentActions === 1.75}
          animateOut={currentActions === 1.25}
          render={currentActions === 2}>
          <StyledH2>{name.length >= 1 ? name : ` . . `}</StyledH2>
          <StyledButtonBox>
            <StyledLabel htmlFor="name" data-testid="form__label">
              <p>Name:</p>
              <StyledInput
                currentActions={currentActions}
                placeholder={currentActions === 2 ? placeholders[0] : ''}
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
                currentActions={currentActions}
                placeholder={currentActions === 2 ? placeholders[1] : ''}
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
                currentActions={currentActions}
                placeholder={currentActions === 2 ? placeholders[2] : ''}
                data-testid="form__description"
                type="text"
                value={description}
                id="description"
                onChange={this.handleChange}
                required
              />
            </StyledLabel>
          </StyledButtonBox>
          <StyledLabel htmlFor="month" data-testid="form__label">
            <StyledButtonBox>
              {MONTHarray.map(
                (monthJSX: string): JSX.Element => (
                  <StyledButtonBox
                    data-testid="form__monthButton"
                    id="month"
                    colorScheme={month === MONTHSstring.get(monthJSX)}
                    onClick={(): void =>
                      this.handleButtonChange(
                        'month',
                        MONTHSstring.get(monthJSX)
                      )
                    }>
                    {monthJSX}
                  </StyledButtonBox>
                )
              )}
            </StyledButtonBox>
          </StyledLabel>
          <StyledLabel htmlFor="year" data-testid="form__label">
            <StyledButtonBox>
              {[
                currentYear,
                currentYear + 1,
                currentYear + 2,
                currentYear + 3
              ].map(
                (mappedYear: number): JSX.Element => (
                  <StyledButtonBox
                    data-testid="form__yearButton"
                    id="year"
                    colorScheme={year === mappedYear}
                    onClick={(): void =>
                      this.handleButtonChange('year', mappedYear)
                    }>
                    {mappedYear}
                  </StyledButtonBox>
                )
              )}
            </StyledButtonBox>
          </StyledLabel>
          <StyledLabel htmlFor="datw" data-testid="form__label">
            <p>Date:</p>
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
        <Backdrop
          onClick={() => returnToCalendar()}
          render={currentActions === 2}
          animateIn={currentActions === 1.75}
          animateOut={currentActions === 1.25}
        />
      </>
    );
  }
}

export default FormModal;
