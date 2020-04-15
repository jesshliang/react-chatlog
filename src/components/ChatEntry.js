import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

	return (
		<section className='Chat-entry'>
			<section className='Entry-name'>{props.sender}</section>
			<ul className='Entry-bubble'>
				<li>{props.body}</li>
				<li className='Entry-time'><Timestamp time={props.timeStamp} /></li>
			</ul>
		</section>
	);

}

export default ChatEntry;