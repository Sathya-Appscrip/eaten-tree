import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App'; 
import registerServiceWorker from './registerServiceWorker';


const Uiapp = () => (
    <MuiThemeProvider>
      <BrowserRouter>  
      <App />
      </BrowserRouter>
    </MuiThemeProvider>
  );
 

ReactDOM.render(<Uiapp />, document.getElementById('root'));
registerServiceWorker();
