import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Login from './components/Login';
import ModalProviderWithKey from './Modal/ModalProviderWithKey';
import NotFound from './components/NotFound';
import configureStore from './store/configureStore';
import TransactionListContainer from './containers/main/TransactionListContainer';
import NotificationContainer from "./containers/main/NotificationContainer";

class App extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <ModalProviderWithKey>
            <AppLayout>
              <Routes>
                <Route path='/' exact element={<Login/>} />
                <Route path='/TransactionPage' exact element={<TransactionListContainer/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
              <NotificationContainer/>
            </AppLayout>
          </ModalProviderWithKey>
        </Router>
      </Provider>
    );
  }
}

export default App;
