
export default function ChatMessage({ message, sender }) {

  return (
       <div>
        {sender === 'robot'  && 
        (<img className="w-10 h-10 inline ml-2" 
          src={`${sender}.png`}  
          alt={sender === 'user' ? 'User' : 'Chatbot'} />)
}
        {message}

        {sender === 'user' && 
        (<img className="w-10 h-10 inline ml-2" 
          src={`${sender}.png`} 
          alt={sender === 'user' ? 'User' : 'Chatbot'} />)
}
         </div>
  )
}
