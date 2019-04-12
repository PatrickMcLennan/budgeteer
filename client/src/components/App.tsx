import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../utils/resets.style';
import Nav from './Nav/Nav';
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

  serverCallback = ({ success, message, user }: IServerResponse): void => {
    return success
      ? this.setState({
          user,
          currentActions: 1,
          actionMessage: { success: true, error: false, message }
        })
      : this.setState({
          user,
          currentActions: 1,
          actionMessage: { success: false, error: true, message }
        });
  };

  getUser = async (): Promise<void> => {
    return await fbLogIn(this.serverCallback);
  };

  createNewEvent = (event: IEvent): void => {
    const { user } = this.state;
    fetch('http://localhost:4000/newEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, event })
    })
      .then((response: IServerResponse): void => this.serverCallback(response))
      .catch((err: IServerResponse): void => this.serverCallback(err));
  };

  editEvent = (event: IEvent): void => {
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

  deleteEvent = (event: IEvent): void => {
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

  showEventForm = (): void => {
    return this.setState({ currentActions: 2 });
  };

  returnToCalendar = (): void => {
    return this.setState({ currentActions: 1 });
  };

  actionButtonMap = (num: number): Function => {
    const actions = new Map<number, Function>();
    actions.set(0, this.getUser);
    actions.set(1, this.showEventForm);
    actions.set(2, this.returnToCalendar);
    return actions.get(num);
  };

  render() {
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
          {currentActions === 2 && (
            <FormModal
              createNewEvent={this.createNewEvent}
              returnToCalendar={this.returnToCalendar}
            />
          )}
          {success && <Message result={success} message={message} />}
          {error && <Message result={success} message={message} />}
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
