import React from "react"
import { Grid, Typography } from "@mui/material"
import PageNotFoundImg from "../../assets/images/PageNotFound.svg"

const styles = () => ({
  main: {
    textAlign: "center",
    padding: 4,
    minHeight: "100vh",
  },
})

const PageNotFound = () => {
  const classes = styles()
  return (
    <Grid container alignItems="center" direction="column" sx={classes.main}>
      <Grid item xs={10}>
        <img src={PageNotFoundImg} alt="page_not_found_image" />

        <Typography variant="h4">Seems like you are lost.</Typography>
      </Grid>
    </Grid>
  )
}

export default PageNotFound
