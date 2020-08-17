import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import * as serviceWorker from './serviceWorker'; 
import Section from './Components/Section'
import Footer from './Components/Footer'
import './styles/style.css'


ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundImage:'linear-gradient( 109.6deg,  rgba(121,203,202,1) 11.2%, rgba(119,161,211,1) 91.1% )'
    }}>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
