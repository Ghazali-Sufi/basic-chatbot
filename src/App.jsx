import React from 'react'
import ChatInput from '../components/ChatInput.jsx'
import ChatMessage from '../components/ChatMessage.jsx'

export default function App() {
  const chatMessages = [
    {
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1'
        
    },
     {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2' 
    },
    {
      message: 'Can you get me todays date?',
      sender: 'user',
      id: 'id3'
    },
    {
      message: 'Today is June 01" sender',
      sender: 'robot',
      id: 'id4'
    },
    {
      message: 'how about flip a coin',
      sender: 'user',
      id: 'id5'
    },
     {
      message: 'Sure! You got tails',
      sender: 'robot',
      id: 'id6' 
    },
    
  ]
  
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <ChatInput />
      {chatMessages.map((chatMessage) => {
      return (
        <ChatMessage 
        message={chatMessage.message} 
        sender={chatMessage.sender}
        key={chatMessage.id}/>
      )
    })}
    </div>
    </>
  )
}
