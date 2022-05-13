import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./pages/App";

const MainApp = () => {
  return (
    <>
      <App />
    </>
  )
}

ReactDOM.render(<MainApp />, document.getElementById('root'))
