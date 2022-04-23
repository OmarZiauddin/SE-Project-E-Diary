import React from 'react';

const MessageContext = React.createContext({});

export const MessageConsumer = MessageContext.Consumer;
export const MessageProvider = MessageContext.Provider;

export default MessageContext;
