import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Main from "./components/Main"
import ThemeConfig from "./theme"
import UserContainer from "./container-context/UserContainer"
import MessageContainer from "./container-context/MessageContainer"
import MessageSnackBar from "./components/common/SnackBarMessage"

const App = () => (
  <div>
    <ThemeConfig>
      <UserContainer>
        <MessageContainer>
          <Router>
            <Main />
            <MessageSnackBar />
          </Router>
        </MessageContainer>
      </UserContainer>
    </ThemeConfig>
  </div>
)

export default App
