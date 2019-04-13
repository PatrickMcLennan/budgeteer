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
}

class App extends React.Component<{}, IState> {
  state: IState = {
    user: {
      name: '',
      facebookId: 0,
      events: []
    },
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

  serverCallback: Function = ({
    success,
    message,
    user
  }: IServerResponse): boolean => {
    success
      ? this.setState({
          user,
          actionMessage: { success: true, error: false, message }
        })
      : this.setState({
          user,
          actionMessage: { success: false, error: true, message }
        });
    return success;
  };

  getUser: Function = async (): Promise<void> => {
    await fbLogIn(this.serverCallback);
    this.returnToCalendar();
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
        (response: IServerResponse): boolean => this.serverCallback(response)
      )
      .catch((err: IServerResponse): boolean => this.serverCallback(err));
  };

  editEvent: Function = (event: IEvent): void => {
    const { user } = this.state;
    const { facebookId } = user;
    fetch('http://localhost:4000/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, event })
    })
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
      .then((response: IServerResponse): void => this.serverCallback(response))
      .catch((err: IServerResponse): void => this.serverCallback(err));
  };

  showEventForm: Function = (): void => {
    return this.setState({ currentActions: 2 });
  };

  returnToCalendar: Function = (): void => {
    return this.setState({ currentActions: 1 });
  };

  actionButtonMap: Function = (num: number): Function => {
    const actions = new Map<number, Function>();
    actions.set(0, this.getUser);
    actions.set(1, this.showEventForm);
    actions.set(2, this.returnToCalendar);
    return actions.get(num);
  };

  render(): JSX.Element {
    const { currentActions, actionMessage, user } = this.state;
    const { message, success, error } = actionMessage;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <LogInModal currentActions={currentActions} />
          <Calendar events={user.events} currentActions={currentActions} />
          <ActionButton
            currentActions={currentActions}
            action={this.actionButtonMap(currentActions)}
          />
          <FormModal
            createNewEvent={this.createNewEvent}
            returnToCalendar={this.returnToCalendar}
            currentActions={currentActions}
          />
          <Message success={success} error={error} message={message} />
        </>
      </ThemeProvider>
    );
  }
}

export default App;

// currentActions legend:
// 0: Login modal, no user
// 1: Calendar view, actionbutton prompting Form Modal
// 2: Form modal is open, action button cancelling & closing
