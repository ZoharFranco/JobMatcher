import React, {useState} from "react";
import "../../styles/panels/ChatPanel.css";

const ChatPanel: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        setMessages([...messages, input]);
        setInput("");
    };

    return (
        <div className="chat-panel">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatPanel;
