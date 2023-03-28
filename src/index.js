import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

// redux setup
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = { 
    key: "persist-key",
    storage,
}
const persistedReducer = persistReducer(persistConfig, allReducers)
const myStore = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(myStore)
  
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <App /> 
        </PersistGate>
      </Provider>
    </Router>
)
