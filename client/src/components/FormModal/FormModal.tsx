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
      [key]: Math.floor(value)
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
                animDelay={`${0 * 0.25}s`}
                render={currentActions === 2}
                placeholder="what"
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
                animDelay={`${1 * 0.25}s`}
                render={currentActions === 2}
                placeholder="where"
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
                animDelay={`${2 * 0.25}s`}
                render={currentActions === 2}
                placeholder="why"
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
          <StyledButtonBox>
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
          </StyledButtonBox>
          <StyledButtonBox>
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
          </StyledButtonBox>
          <StyledButtonBox>
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
          </StyledButtonBox>
          <StyledButtonBox>
            <StyledInput
              data-testid="form__submit"
              id="submit"
              type="submit"
              value={this.props.event ? 'Edit Event' : 'Create Event'}
            />
          </StyledButtonBox>
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
