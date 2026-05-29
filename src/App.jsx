import React from 'react'
import ChatInput from '../components/ChatInput.jsx'
import ChatMessage from '../components/ChatMessage.jsx'

export default function App() {
  
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <ChatInput />
      <ChatMessage message="hello chatbot" sender="user" />
      <ChatMessage message="Hello! How can I help you?" sender="robot"/>
    </div>
    </>
  )
}
