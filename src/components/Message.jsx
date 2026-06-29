function Message({ message }) {
  return (
    <div
      className={`message ${
        message.sender === "user" ? "user-message" : "bot-message"
      }`}
    >
      <div className="message-text">
        {message.text}
      </div>

      {message.time && (
        <div className="message-time">
          {message.time}
        </div>
      )}
    </div>
  );
}

export default Message;