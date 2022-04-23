import React, { useContext } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import LockIcon from "@mui/icons-material/Lock"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { ENDPOINT } from "../../utils/endpoint"
import axios from "axios"
import UserContext from "../../providers/UserContext"
import MessageContext from "../../providers/MessageContext"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        E-Diary
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const theme = createTheme()

export default function SignIn({ handleValidate }) {
  const userContext = useContext(UserContext)
  const messageContext = useContext(MessageContext)
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      const email = data.get("email")
      const password = data.get("password")
      const isStudent = /student/.test(email)
      const role = isStudent ? "student" : "teacher"
      const res = await axios.post(
        `${ENDPOINT}/${role}/signIn`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      console.log(res)
      if (res.data && res.data[role]) {
        userContext.handleUser({ ...res.data[role], role })
        messageContext.setAndToggleSnackbar("Login Successful")
        handleValidate(true)
      } else {
        messageContext.setAndToggleSnackbar("Login Failed")
        handleValidate(false)
      }
      // navigate("/dashboard", { replace: true })
    } catch (err) {
      console.log("login failed")
      // generateErrorToast(err, messageContext)
      messageContext.setAndToggleSnackbar("Login failed", true)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
