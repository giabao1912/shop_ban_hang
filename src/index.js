import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './store';


// const store = createStore(cartReducer);
console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <head>
      <meta charSet="UTF-8"/>
        <meta name="description" content="Male_Fashion Template"/>
        <meta name="keywords" content="Male_Fashion, unica, creative, html"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Male-Fashion | Template</title>

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet"/>

        <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/font-awesome.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/elegant-icons.css" type="text/css"/>
        <link rel="stylesheet" href="/css/magnific-popup.css" type="text/css"/>
        <link rel="stylesheet" href="/css/nice-select.css" type="text/css"/>
        <link rel="stylesheet" href="/css/owl.carousel.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/slicknav.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/style.css" type="text/css"/>
    </head>
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
