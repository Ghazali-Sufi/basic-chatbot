
export default function ChatMessage({ message, sender }) {

  return (
     <div className={`flex items-end gap-4 w-full mb-6 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      
      {sender === 'robot' && (
        <img 
          className="w-10 h-10 rounded-full shadow-sm shrink-0" 
          src={`${sender}.png`} 
          alt="Chatbot" 
        />
      )}

      {/* Pure, smooth round shapes with no sharp, angular chat tails */}
      <div className={`px-6 py-3.5 rounded-3xl text-[15px] leading-relaxed max-w-[75%] ${
        sender === 'user' 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-black-800 shadow-sm border border-gray-100'
      }`}>
        {message}
      </div>

      {sender === 'user' && (
        <img 
          className="w-10 h-10 rounded-full shadow-sm shrink-0" 
          src={`${sender}.png`} 
          alt="User" 
        />
      )}

    </div>
  )
}
