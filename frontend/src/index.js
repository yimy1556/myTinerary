import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {myStore}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
