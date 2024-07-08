import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ("./styles/app.scss")  ;// import here css bro for external styling


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
