import { chatHistory } from "../data/dummyData";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        🤖 AI Chatbot
      </div>

      {/* New Chat Button */}
      <button className="new-chat-btn">
        + New Chat
      </button>

      {/* Chat History */}
      <div className="history">
        <h3>Recent Chats</h3>

        {chatHistory.map((chat, index) => (
          <div key={index} className="history-item">
            💬 {chat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;