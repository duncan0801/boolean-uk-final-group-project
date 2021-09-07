import React from "react";
import "../styles/chat.css";

function Message() {
	return (
		// <li className={user_ID === activeUser ? "outgoing message" : "message"}>
		<li className="message">
			<p>Hello</p>
		</li>
	);
}
function Chat() {
	return (
		<div className="message-wrapper">
			<section className="messages">
				<ul>
					<Message />
					<Message />
					<Message />
				</ul>
			</section>
			<section className="compose">
				<form>
					<input type="text" />
					<button type="submit">
						{/* <!-- This is the send button --> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path
								fill="currentColor"
								d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
							></path>
						</svg>
					</button>
				</form>
			</section>
		</div>
	);
}

export default Chat;
