import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (messages) => {
	const firstSender = messages.messages[0].sender;

  const messageComp = messages.messages.map((message) => {
		
		if (message.sender === firstSender) {
			return(
				<ChatEntry
					sender={message.sender}
					body={message.body}
					timeStamp={message.timeStamp}
					key={message.body}
					local="true"
				/>
			);
		} else {
			return(
				<ChatEntry
					sender={message.sender}
					body={message.body}
					timeStamp={message.timeStamp}
					key={message.body}
					local="false"
				/>
			);
		};
  });

  return (
    <section className="chat-log">
      {messageComp}
    </section>
  );
}

export default ChatLog;