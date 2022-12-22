import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './Redux/Store.js'
import './index.scss'
import App from './Components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
