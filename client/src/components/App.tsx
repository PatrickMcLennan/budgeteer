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

interface IState {
  user?: IUser;
  currentActions: number;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    currentActions: 0
  };

  componentDidMount(): void {
    return fbLoginInit();
  }

  getUser = async (): Promise<void> => {
    const cb = ({ name, facebookId, events }: IUser): void => {
      this.setState({
        user: {
          name,
          facebookId,
          events
        },
        currentActions: 1
      });
    };
    return await fbLogIn(cb);
  };

  serverCallback = ({
    status,
    events,
    data
  }: IServerResponse): void | Promise<any> => {
    const { user } = this.state;
    user.events = events;
    return status === 200
      ? this.setState({ user, currentActions: 1 })
      : Promise.reject(data);
  };

  createNewEvent = (event: IEvent): void => {
    const { facebookId } = this.state.user;
    fetch('https://localhost:4000/newEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, event })
    })
      .then(
        (response: IServerResponse): void | Promise<any> =>
          this.serverCallback(response)
      )
      .catch(err => console.error(err));
  };

  editEvent = (event: IEvent): void => {
    const { facebookId } = this.state.user;
    fetch('https://localhost:4000/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, event })
    })
      .then(
        (response: IServerResponse): void | Promise<any> =>
          this.serverCallback(response)
      )
      .catch(err => console.error(err));
  };

  deleteEvent = (event: IEvent): void => {
    const { facebookId } = this.state.user;
    fetch('https://localhost:4000/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, event })
    })
      .then(
        (response: IServerResponse): void | Promise<any> =>
          this.serverCallback(response)
      )
      .catch(err => console.error(err));
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
    const { currentActions } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Nav />
          <LogInModal currentActions={currentActions} />
          {this.state.user && (
            <Calendar
              events={this.state.user.events}
              fade={this.state.user ? true : false}
            />
          )}
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
