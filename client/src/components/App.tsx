import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../utils/resets.style';
import Nav from './Nav/Nav';
import ActionButton from './ActionButton/ActionButton';
import { IEvent, IUser } from '../utils/dictionary';
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
    fbLoginInit();
  }

  getUser = async () => {
    const cb = (
      name: string,
      facebookId: number,
      events: IEvent[] | []
    ): void => {
      this.setState({
        user: {
          name,
          facebookId,
          events
        },
        currentActions: 1
      });
    };
    await fbLogIn(cb);
  };

  createNewEvent = (event: IEvent): void => {
    const { facebookId } = this.state.user;
    fetch('https://localhost:4000/newEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, event })
    }).then(response => {
      if (response.status === 200) {
        return this.returnToCalendar();
      }
    });
  };

  showEventForm = (event: IEvent): void => {
    this.setState({ currentActions: 2 });
  };

  returnToCalendar = () => {
    this.setState({ currentActions: 1 });
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
          {this.state.user && <Calendar events={this.state.user.events} />}
          <ActionButton
            currentActions={currentActions}
            action={this.actionButtonMap(currentActions)}
          />
          <FormModal createNewEvent={this.createNewEvent} />
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
