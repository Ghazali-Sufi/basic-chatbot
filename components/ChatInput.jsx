import React from 'react'

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

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
      { message: 'Loading...', sender: 'robot', id:crypto.randomUUID() }])

    
    const response = await Chatbot.getResponseAsync(inputText);
    console.log('Chatbot response:', response);

    setChatMessages([
      ...newChatMessages, 
      { message: response, sender: 'robot', id:crypto.randomUUID() }]);

      setIsLoading(false)

  }
    return (
     <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      {/* Input Group Wrapper */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
        
        <input 
          type="text" 
          placeholder="Send a message to chatbot..." 
          className="flex-1 pl-2 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          onChange = {saveInputText}
          value={inputText}
          onKeyDown= {keyboardEvent}
        />
        
        <button 
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shrink-0"
        onClick={sendMessage}
        >
          Send
        </button>

      </div>
    </div>
    )
  } 