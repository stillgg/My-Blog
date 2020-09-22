import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import {Preloader} from './components/preloader/Preloader'

import {Provider} from 'react-redux'

import {store} from './store/store'


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Preloader/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
