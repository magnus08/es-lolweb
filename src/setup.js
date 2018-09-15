import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from 'react-intl';
import Modal from 'react-modal';

// const {store} = configureStore({config: window.appState.config});
//
// for (let loc in window.ReactIntlLocaleData) {
//   if (window.ReactIntlLocaleData.hasOwnProperty(loc)) {
//     addLocaleData(window.ReactIntlLocaleData[loc]);
//   }
// }

ReactDOM.render(
  <div>
    <IntlProvider
      locale={window.ccbUserInfo.locale}
      messages={window.appState.config.translations.keys}
    >
      {/*<Provider store={store}>*/}
      {/*<React.StrictMode>*/}
      <App />
      {/*</React.StrictMode>*/}
      {/*</Provider>*/}
    </IntlProvider>
  </div>,
  document.getElementById('es-lolweb-root'),
);

Modal.setAppElement(document.getElementById('es-lolweb-root'));
