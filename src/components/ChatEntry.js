import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

	if (props.local === "true") {
		return (
			<section className='chat-entry local'>
				<span className='entry-name'>{props.sender}</span>
				<ul className='entry-bubble'>
					<li>{props.body}</li>
					<li className='entry-time'><Timestamp time={props.timeStamp} /></li>
				</ul>
			</section>
		);
	} else {
		return (
			<section className='chat-entry remote'>
				<span className='entry-name'>{props.sender}</span>
				<ul className='entry-bubble'>
					<li>{props.body}</li>
					<li className='entry-time'><Timestamp time={props.timeStamp} /></li>
				</ul>
			</section>
		);
	};

}

export default ChatEntry;