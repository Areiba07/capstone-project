import React from 'react';
import Message from './message';

const messages = [
  {
    subject: 'Plumbing',
    sender: 'Alice',
    date: '2023-09-05',
    content: 'Hi, how are you?',
  },
  {
    subject: 'Electricity',
    sender: 'Bob',
    date: '2023-09-06',
    content: 'We have a meeting tomorrow at 2 PM.',
  },
];

const accountMessages = () => {
  return (
    <div>
      <h2>Message List</h2>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default accountMessages;
