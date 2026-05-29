import React from 'react'

export default function ChatInput() {
    return (
     <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      {/* Input Group Wrapper */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
        
        <input 
          type="text" 
          placeholder="Send a message to chatbot..." 
          className="flex-1 pl-2 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shrink-0">
          Send
        </button>

      </div>
    </div>
    )
  } 