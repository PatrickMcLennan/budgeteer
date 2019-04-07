import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../utils/resets.style';
import Nav from './Nav/Nav';
import ActionButton from './ActionButton/ActionButton';
import { IEvent, IUser } from '../utils/dictionary';
import { fbLogIn, fbLoginInit } from '../utils/auth';
import LogInModal from './LogInModal/LogInModal';
import Calendar from './Calendar/Calendar';

interface IState {
  user?: IUser;
  currentActions: number;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    currentActions: 0
  };

  componentDidMount() {
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
      console.log(name, facebookId, events);
    };
    await fbLogIn(cb);
  };

  createNewEvent = async (event: IEvent) => {
    // fetch('https://linkToTheBackEnd/POST/yaddayadda')
    //   .then(status => status)
    //   .catch(err => Promise.reject(err));
    console.log('createNewEvent');
  };

  returnToCalendar = () => {
    this.setState({ currentActions: 1 });
  };

  actionButtonMap = (num: number): Function => {
    const actions = new Map<number, Function>();
    actions.set(0, this.getUser); // Log in Page, getUser Modal
    actions.set(1, this.createNewEvent); // Calendar Page, add new Event action
    actions.set(2, this.returnToCalendar); // Return to Calendar page, ^^

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
              currentActions={currentActions}
              events={this.state.user.events}
            />
          )}
          <ActionButton
            currentActions={currentActions}
            action={this.actionButtonMap(currentActions)}
          />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
