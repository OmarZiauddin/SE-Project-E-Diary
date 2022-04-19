import React, { useState } from "react"
import Routes from "./router/Router"
import { Grid } from "@mui/material"
import Login from "./login/Login"

const styles = () => ({
  mainGrid: { height: "100%" },
})

const Main = () => {
  const classes = styles()
  const [validate, setValidate] = useState(false)

  const handleValidate = (value) => {
    setValidate(value)
  }

  return (
    <Grid sx={classes.mainGrid}>
      {validate ? (
        <Grid>
          <Routes />
        </Grid>
      ) : (
        <Login handleValidate={handleValidate} />
      )}
    </Grid>
  )
}

export default Main
