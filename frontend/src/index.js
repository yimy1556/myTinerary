import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import * as serviceWorker from './serviceWorker'; 
import Section from './Components/Section'
import './styles/style.css'


ReactDOM.render(
  <React.StrictMode style={{backgroundColor:'rgb(231, 156, 113)'}}>
    <div style={{backgroundColor:'rgb(231, 156, 113)'}}>
      <Header/>
      <Section/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
