import { useEffect, useRef } from "react";
import Message from "./Message";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  // Auto-scroll whenever a new message is added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;