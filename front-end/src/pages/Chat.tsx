import React, { FormEventHandler, SyntheticEvent, useEffect } from "react";
import useStore, { Counsellor, Message } from "../store";
import "../styles/chat.css";
// Need:
//  1. the content from the message
//  2. the user/ counsellor profile photo
//  3. identify if its a user message or a counsellor message

function MessageComponent({ message }: { message: Message }) {
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
	const counsellor = useStore((state) => state.counsellor);
	const messageField = useStore((state) => state.messageField);
	const setMessageField = useStore((state) => state.setMessageField);
	const fetchMessagesByConversationId = useStore(
		(state) => state.fetchMessagesByConversationId
	);
	const postMessage = useStore((state) => state.postMessage);
	const user = useStore((state) => state.user);
	const userMessages = user?.messages;
	const fetchCounsellorById = useStore((state) => state.fetchCounsellorById);

	useEffect(() => {
		fetchCounsellorById(String(user?.counsellor_ID));
	}, []);

	function handleMessageSend(event: React.SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();
		if (user && user.counsellor_ID && user.conversation) {
			const today = new Date();
			const dd = String(today.getDate());
			const mm = String(today.getMonth() + 1);
			const yyyy = String(today.getFullYear());

			const date = dd + "/" + mm + "/" + yyyy;

			const content = messageField;
			const user_ID = user.id;
			const counsellor_ID = user.counsellor_ID;
			const conversation_ID = user.conversation.id;

			postMessage(date, content, user_ID, counsellor_ID, conversation_ID);
			//on click the message should be posted to messages
			//if the message was posted ok, the state should be updated
		}
	}

	return (
		<div className="chat-wrapper">
			<div className="search-container">
				<input type="text" placeholder="Search..." />
			</div>
			{/* <div className="new-message-container"></div> */}
			<div className="chat-title">
				<span>
					{counsellor?.firstName + " " + counsellor?.lastName}
				</span>
			</div>
			<div className="chat-message-list">
				{/* {userMessages?.map((messageToShow) => {
					return <MessageComponent message={messageToShow} />;
				})} */}
				<li className="message">
					<img
						className="profile-pic"
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.rcovenant.org%2Fwp-content%2Fuploads%2F2008%2F02%2Fgeneric-profile-pic.png&f=1&nofb=1"
						alt=""
					/>
					<p>Hello</p>
				</li>
				<li className="counsellor-message">
					<img
						className="profile-pic"
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.rcovenant.org%2Fwp-content%2Fuploads%2F2008%2F02%2Fgeneric-profile-pic.png&f=1&nofb=1"
						alt=""
					/>
					<p className="message-content">Hello</p>
				</li>
			</div>
			<div className="chat-form">
				<form onSubmit={handleMessageSend}>
					<div className="container">
						<textarea
							onChange={(e) => setMessageField(e.target.value)}
							name="composeMessage"
							id="composeMessage"
							value={messageField}
						></textarea>
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

export default Chat;
