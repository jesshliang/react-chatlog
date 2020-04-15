import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (messages) => {
  const messageComp = messages.messages.map((message) => {

    return(
      <ChatEntry
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        key={message.body}
      />
    );

  });

  return (
    <section className="chat-log">
      {messageComp}
    </section>
  );
}

export default ChatLog;