import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
/* import * as serviceWorker from './serviceWorker' */

import App from './App/App';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

/* serviceWorker.unregister() */