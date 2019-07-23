import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
     <BrowserRouter>
        <App />
    </BrowserRouter>
    </HashRouter>,
    document.getElementById('root')
  )
})

