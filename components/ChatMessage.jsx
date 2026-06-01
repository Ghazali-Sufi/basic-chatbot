
export default function ChatMessage({ message, sender }) {

  if (sender === 'robot') {
    return (
       <div>
         <img className="w-10 h-10 inline ml-2" src={`${sender}.png`} alt={sender === 'user' ? 'User' : 'Chatbot'} />
        {message}
         </div>
    );
  }
  return (
       <div>
        {message}
        <img className="w-10 h-10 inline ml-2" src={`${sender}.png`} alt={sender === 'user' ? 'User' : 'Chatbot'} />
         </div>
  )
}
