import React from "react";
import "../styles/chat.css";

function Message() {
	return (
		// <li className={user_ID === activeUser ? "outgoing message" : "message"}>
		<li className="message">
			<img
				className="profile-pic"
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.rcovenant.org%2Fwp-content%2Fuploads%2F2008%2F02%2Fgeneric-profile-pic.png&f=1&nofb=1"
				alt=""
			/>
			<p>Hello</p>
		</li>
	);
}
function Chat() {
    function handleMeassageSend() {
        //on click the message should be posted to messages
        //if the message was posted the state should be updated 
    }
	return (
		<div className="chat-wrapper">
			<div className="search-container">
				<input type="text" placeholder="Search..." />
			</div>
			{/* <div className="new-message-container"></div> */}
			<div className="chat-title">
				<span>Dr. Whatts</span>
			</div>
			<div className="chat-message-list"></div>
			<div className="chat-form">
				<form>
					<div className="container">
						<textarea name="composeMessage"></textarea>
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
					</div>
				</form>
			</div>
		</div>
	);
}

function Chat1() {
	return (
		<>
			<section className="messages">
				<ul>
					<Message />
					<Message />
					<Message />
				</ul>
			</section>
			<section className="compose">
				<form>
					<textarea name="composeMessage"></textarea>
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
		</>
	);
}

export default Chat;
