import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

import { initialMessages } from "./data/dummyData";

function App() {
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Show typing indicator
    const typingMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: "Typing...",
      typing: true,
      time: "",
    };

    setMessages((prev) => [...prev, userMessage, typingMessage]);

    // Dummy AI Reply
    setTimeout(() => {
      const botReplies = [
        "Hello! 👋",
        "I'm just a dummy AI response.",
        "FastAPI backend will be connected later.",
        "React is awesome!",
        "How can I help you today?",
      ];

      const randomReply =
        botReplies[Math.floor(Math.random() * botReplies.length)];

      const botMessage = {
        id: Date.now() + 2,
        sender: "bot",
        text: randomReply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [
        ...prev.filter((msg) => !msg.typing),
        botMessage,
      ]);
    }, 1500);
  };

  return (
    <div className="app">
      <Sidebar />

      <div className="chat-container">
        <ChatWindow messages={messages} />

        <MessageInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;