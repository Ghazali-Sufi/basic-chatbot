import React from 'react'
import {useState} from 'react'
import {Chatbot} from 'supersimpledev'

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function saveInputText(event) {
      // Event: is an object that contains information about the event/change that occurred, such as the type of event, the target element, and any additional data associated with the event.

    setInputText(event.target.value)
  }

  function keyboardEvent(event) {
    if (event.key === 'Enter') {
      sendMessage()
    } else if (event.key === 'Escape') {
      setInputText('')
    }
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true)

    setInputText('')

      const newChatMessages = [
      ...chatMessages, 
      { message: inputText, sender: 'user', id:crypto.randomUUID() }]

    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages, 
      {  message: <img className="h-[40px]" src="loading-spinner.gif" alt="loading-spinner" />, sender: 'robot', id:crypto.randomUUID() }])

    
    const response = await Chatbot.getResponseAsync(inputText);
    console.log('Chatbot response:', response);

    setChatMessages([
      ...newChatMessages, 
      { message: response, sender: 'robot', id:crypto.randomUUID() }]);

      setIsLoading(false)

  }
    return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-2 shadow-sm focus-within:border-slate-350 focus-within:ring-4 focus-within:ring-slate-100 transition-all">
  <div className="flex items-center gap-3 border border-slate-200 rounded-lg px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
    
    <input 
      type="text" 
      placeholder="Send a message to chatbot..." 
      className="flex-1 pl-3 py-2 text-md text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      onChange={saveInputText}
      value={inputText}
      onKeyDown={keyboardEvent}
    />
    
    <button 
      className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors shrink-0 shadow-sm cursor-pointer"
      onClick={sendMessage}
    >
      Send
    </button>

  </div>
</div>
    )
  } 