import React from 'react'

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState('')

  function saveInputText(event) {
      // Event: is an object that contains information about the event/change that occurred, such as the type of event, the target element, and any additional data associated with the event.

    setInputText(event.target.value)
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages, 
      { message: inputText, sender: 'user', id:crypto.randomUUID() }]
    // Here you can implement the logic to send the message to the chatbot or perform any desired action with the inputText.
    console.log('Message sent:', inputText)

    setChatMessages(newChatMessages);

      const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages, 
      { message: response, sender: 'robot', id:crypto.randomUUID() }]);

      console.log('Chatbot response:', response);
    
    // Clear the input field after sending the message
    setInputText('')
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