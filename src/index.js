import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom' //EJ9-1
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
 
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)

// cuando tenemos un componente padre, donde cierra poner , </BrowserRouter>,