import "./Message.css";

const Message = ({ msg, type }) => {
	return (
		<div className={`message ${type}`}>
			<p>
				<b>Atenção:</b> {msg}
			</p>
		</div>
	);
};

export default Message;
