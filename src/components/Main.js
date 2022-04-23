import React, { useState } from "react"
import Routes from "./router/Router"
import { Grid } from "@mui/material"
import Login from "./login/Login"
import Bar from "../container/dashboard"

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
        <Grid container justifyContent="center">
          <Grid item>
            <Bar />
          </Grid>
          <Grid item sx={{ marginTop: "100px" }}>
            <Routes />
          </Grid>
        </Grid>
      ) : (
        <Login handleValidate={handleValidate} />
      )}
    </Grid>
  )
}

export default Main
