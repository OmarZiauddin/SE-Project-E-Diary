import React, { useState } from 'react';
import { MessageProvider } from '../providers/MessageContext';

function MessageContainer({ children }) {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [error, setError] = useState(false);

  // Snack bar duration
  const [duration, setDuration] = useState(3000);

  function toggleSnackBar(state) {
    setShowSnackBar(state);
  }

  function setAndToggleSnackbar(message = '', isError = false) {
    setError(isError);
    setSnackBarMessage(message);
    toggleSnackBar(true);
  }

  return (
    <MessageProvider
      value={{
        error,
        setError,
        duration,
        setDuration,
        showSnackBar,
        snackBarMessage,
        toggleSnackBar,
        setSnackBarMessage,
        setAndToggleSnackbar
      }}
    >
      {children}
    </MessageProvider>
  );
}

export default MessageContainer;
