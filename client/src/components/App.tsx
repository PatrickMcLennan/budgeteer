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
      facebookID: number,
      events: IEvent[] | []
    ): void => {
      this.setState({
        user: {
          name,
          facebookID,
          events
        },
        currentActions: 1
      });
    };
    await fbLogIn(cb);
  };

  createNewEvent = async (event: IEvent) => {
    // fetch('https://linkToTheBackEnd/POST/yaddayadda')
    //   .then(status => status)
    //   .catch(err => Promise.reject(err));
    console.log('createNewEvent');
  };

  actionButtonMap = (num: number): Function => {
    const actions = new Map<number, Function>();
    actions.set(0, this.getUser);
    actions.set(1, this.createNewEvent);

    return actions.get(num);
  };

  render() {
    const { currentActions, user } = this.state;
    const { events } = user;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Nav />
          <LogInModal visible={currentActions === 0 ? true : false} />
          {user && (
            <Calendar
              visible={currentActions === 1 ? true : false}
              events={events}
            />
          )}
          <ActionButton
            display={currentActions}
            action={this.actionButtonMap(currentActions)}
          />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
