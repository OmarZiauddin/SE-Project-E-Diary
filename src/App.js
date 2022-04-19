import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Main from "./components/Main"
import AppBar from "./components/appBar/AppBar"

const App = () => (
  <div>
    <Router>
      <AppBar />
      <Main />
    </Router>
  </div>
)

export default App
