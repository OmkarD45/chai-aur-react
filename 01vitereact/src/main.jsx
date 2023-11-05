import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const ReactElement=React.createElement(
  'a',
  {href:'https://facebook.com',target:'_blank'},
  'Click me to visit Facebook'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // ReactElement
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
