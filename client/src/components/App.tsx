import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../utils/resets.style';
import ActionButton from './ActionButton/ActionButton';
import { IEvent, IUser, IServerResponse } from '../utils/dictionary';
import { fbLogIn, fbLoginInit } from '../utils/auth';
import LogInModal from './LogInModal/LogInModal';
import Calendar from './Calendar/Calendar';
import FormModal from './FormModal/FormModal';
import Message from './Message/Message';

interface IState {
  user: IUser;
  currentActions: number;
  actionMessage: {
    success: boolean;
    error: boolean;
    message: string;
  };
  currentEvent: IEvent | null;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    user: {
      name: '',
      facebookId: 0,
      events: []
    },
    currentEvent: null,
    currentActions: 0,
    actionMessage: {
      success: false,
      error: false,
      message: ''
    }
  };

  componentDidMount(): void {
    return fbLoginInit();
  }

  resetActionMessage: Function = (): void =>
    this.setState({
      actionMessage: { success: false, error: false, message: '' }
    });

  serverCallback: Function = ({
    success,
    message,
    events
  }: IServerResponse): void => {
    if (success) {
      this.setState({
        user: {
          name: this.state.user.name,
          facebookId: this.state.user.facebookId,
          events
        },
        currentActions: 1,
        actionMessage: { success: true, error: false, message }
      });
      setTimeout(this.resetActionMessage, 2500);
    } else {
      this.setState({
        actionMessage: { success: false, error: true, message }
      });
      setTimeout(this.resetActionMessage, 2500);
    }
  };

  getUser: Function = async (): Promise<void> => {
    interface getUserResponse {
      success: boolean;
      message: string;
      user?: IUser;
    }
    const getUserCallback = ({ success, message, user }: getUserResponse) => {
      success
        ? this.setState({
            user,
            currentActions: 1,
            actionMessage: { success: true, error: false, message }
          })
        : this.setState({
            actionMessage: { success: false, error: true, message }
          });
    };
    await fbLogIn(getUserCallback);
    setTimeout(this.resetActionMessage, 2500);
  };

  createNewEvent: Function = (event: IEvent): void => {
    const { user } = this.state;
    fetch('http://localhost:4000/newEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, event })
    })
      .then(
        (response: IServerResponse): Promise<IServerResponse> => response.json()
      )
      .then((response: IServerResponse): void => this.serverCallback(response))
      .catch((err: IServerResponse): void => this.serverCallback(err));
  };

  editEvent: Function = (event: IEvent): void => {
    const { user } = this.state;
    this.setState({ currentActions: 2 });
    fetch('http://localhost:4000/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, event })
    })
      .then(
        (response: IServerResponse): Promise<IServerResponse> => response.json()
      )
      .then((response: IServerResponse): void => this.serverCallback(response))
      .catch((err: IServerResponse): void => this.serverCallback(err));
  };

  deleteEvent: Function = (event: IEvent): void => {
    const { user } = this.state;
    const { facebookId } = user;
    fetch('http://localhost:4000/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, event })
    })
      .then(
        (response: IServerResponse): Promise<IServerResponse> => response.json()
      )
      .then((response: IServerResponse): void => this.serverCallback(response))
      .catch((err: IServerResponse): void => this.serverCallback(err));
  };

  setCurrentEvent: Function = (event: IEvent): void => {
    return this.setState({ currentEvent: event });
  };

  showEventForm: Function = (): any => {
    this.setState({ currentActions: 1.75 });
    return setTimeout(() => this.setState({ currentActions: 2 }), 750);
  };

  returnToCalendar: Function = (): any => {
    this.setState({ currentActions: 1.25 });
    return setTimeout(() => this.setState({ currentActions: 1 }), 750);
  };

  actionButtonMap: Function = (num: number): Function | any => {
    const actions = new Map<number, Function>();
    actions.set(0, this.getUser);
    actions.set(1, this.showEventForm);
    actions.set(2, this.returnToCalendar);
    return actions.get(num);
  };

  render(): JSX.Element {
    const { currentActions, actionMessage, user, currentEvent } = this.state;
    const { message, success, error } = actionMessage;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <LogInModal currentActions={currentActions} />
          <Calendar
            events={user.events}
            setCurrentEvent={this.setCurrentEvent}
            showEventForm={this.showEventForm}
            currentActions={currentActions}
          />
          <ActionButton
            currentActions={currentActions}
            action={this.actionButtonMap(currentActions)}
          />
          {currentActions > 1 && (
            <FormModal
              event={currentEvent}
              currentActions={currentActions}
              returnToCalendar={this.returnToCalendar}
              createNewEvent={this.createNewEvent}
              editEvent={this.editEvent}
              deleteEvent={this.deleteEvent}
            />
          )}
          {success && (
            <Message success={success} error={error} message={message} />
          )}
          {error && (
            <Message success={success} error={error} message={message} />
          )}
        </>
      </ThemeProvider>
    );
  }
}

export default App;

// currentActions index

// Whole numbers = rest states
// Half Numbers = animation states

// 0: Log In Modal
// 0.5: log in modal animating out, calendar animating in
// 1: Calendar view, with either events or 'No Events' message
// 1.5: Form animating in
// 2: Form view
