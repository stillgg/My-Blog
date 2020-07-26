import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import {Preloader} from './components/preloader/Preloader'

ReactDOM.render(
  <React.StrictMode>
    <Preloader />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
