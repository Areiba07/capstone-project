import React, { useState } from 'react';
import "../assets/styles/chatbox.css";

const ModalChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Create a new message object with a timestamp
      const messageObj = {
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };

      // Update the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, messageObj]);

      // Clear the input field after sending the message
      setNewMessage('');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>User Name</h2>
        <div className="chat">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.text}</p>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          ))}
        </div>
        <textarea
          rows="4"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ModalChatBox;
