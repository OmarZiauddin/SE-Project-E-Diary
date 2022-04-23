import React, { useState } from "react"
import { UserProvider } from "../providers/UserContext"

function UserContainer({ children }) {
  const [user, setUser] = useState(null)

  const handleUser = (user) => {
    setUser(user)
  }

  return (
    <UserProvider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </UserProvider>
  )
}

export default UserContainer
