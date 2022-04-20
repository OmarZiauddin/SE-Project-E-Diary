import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Main from "./components/Main"
import AppBar from "./components/appBar/AppBar"
import ThemeConfig from "./theme"

const App = () => (
  <div>
    <ThemeConfig>
      <Router>
        <Main />
      </Router>
    </ThemeConfig>
  </div>
)

export default App
