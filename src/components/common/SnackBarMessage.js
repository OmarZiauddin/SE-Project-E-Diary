import React, { useContext } from "react"
import { Snackbar, Slide, Alert, AlertTitle } from "@mui/material"
import MessageContext from "../../providers/MessageContext"

function MessageSnackBar({
  action = null,
  position = {
    vertical: "bottom",
    horizontal: "right",
  },
}) {
  const context = useContext(MessageContext)
  const autoHideDuration = context.duration || 3000
  const variant = context.error ? "error" : "success"
  function onClose() {
    context.toggleSnackBar(false)
  }
  return (
    <Snackbar
      anchorOrigin={position}
      onClose={onClose}
      open={context.showSnackBar}
      ClickAwayListenerProps={{
        mouseEvent: false,
      }}
      action={action}
      TransitionComponent={Slide}
      autoHideDuration={autoHideDuration}
    >
      <Alert
        severity={variant}
        sx={{
          minWidth: 300,
          padding: `10px 20px`,
          boxShadow: "0px 0px 10px 4px rgba(0,0,0,0.25)",
        }}
      >
        <AlertTitle>{context.error ? "Error" : "Success"}</AlertTitle>
        {context.snackBarMessage}
      </Alert>
    </Snackbar>
  )
}
export default MessageSnackBar
