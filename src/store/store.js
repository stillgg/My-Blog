import {compose, createStore} from 'redux'

import {rootReducer} from './reducers/rootReducer'

export const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)




// store.subscribe( () => console.log( store.getState() ) )
//
// store.dispatch({ type: 'INCREMENT' })
//
// store.dispatch({ type: 'INCREMENT' })
//
// store.dispatch({ type: 'INCREMENT' })