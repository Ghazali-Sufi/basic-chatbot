import React from 'react'
import ChatInput from '../components/ChatInput.jsx'
import ChatMessage from '../components/ChatMessage.jsx'

export default function App() {
  const [chatMessages, setChatMessages] = React.useState([
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
      message: 'Today is June 01',
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
  ])

   const chatMessagesRef = React.useRef(null)
  
  React.useEffect(() => {
    // React will run this function after the component is created, and everytime the component is updated (e.g. when state changes)
    const containerELement = chatMessagesRef.current;
    if (containerELement) {
      // Scroll to the bottom of the chat messages container
      containerELement.scrollTop = containerELement.scrollHeight;
    }

  }, [chatMessages]) // This is the dependency array (Let's us control when the useEffect runs). The useEffect will only run when the chatMessages state changes

  return (
    <>
   <div className="h-screen bg-slate-50 text-slate-800 flex flex-col justify-between py-6 px-4 ">
  <div 
  className="w-full max-w-2xl mx-auto flex flex-col flex-1 justify-between overflow-hidden"
  >
    
    {/* Chat History Area */}
    <div className="flex-1 space-y-4 overflow-y-auto py-4 scrollbar-none " ref = {chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message} 
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        )
      })}
    </div>

    {/* Chat Input Area pinned neatly at the bottom */}
    <div className="pt-4 border-t border-slate-200/80 bg-slate-50 sticky bottom-0">
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>

  </div>
</div>
    </>
  )
}
