import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import WebFont from 'webfontloader';

// Application
import App from './App'
import './index.scss'

WebFont.load({
    google: {
        families: ['Exo', 'Montserrat:300']
    }
});

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'))

serviceWorker.register()
