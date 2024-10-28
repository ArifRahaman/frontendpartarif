import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: input }]
            }
          ]
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      const rawContent = response.data.candidates[0].content.parts
        .map(part => {
          return part.text
            .split('\n') // Split at each newline character
            .map(segment => {
              // Replace *...* with <b>...</b> and ```...``` with <pre>...</pre>
              return segment.trim()
                .replace(/```(.*?)```/gs, '<pre>$1</pre>') // For code blocks
                .replace(/\*(.*?)\*/g, '<b>$1</b>');       // For bold text
            })
            .join('\n'); // Join the segments back with newline characters
        })
        .join(' '); // Join all parts with spaces

      const words = rawContent.split(' ');
      let index = -1;

      const initialMessage = { role: "model", content: '' };
      setMessages([...newMessages, initialMessage]);

      const typingInterval = setInterval(() => {
        if (index < words.length-1) {
          setMessages(prevMessages => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            return [
              ...prevMessages.slice(0, -1),
              { ...lastMessage, content: lastMessage.content + ' ' + words[index] }
            ];
          });
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 56);

    } catch (error) {
      console.error("Error fetching data from Gemini API:", error);
    }
  };

  return (
    <div className="flex justify-center bg-gray-900 min-h-screen">
      <div className="relative w-5/6 md:w-2/3 lg:w-1/2 flex flex-col justify-between p-6 bg-white bg-opacity-90 rounded-lg shadow-md min-h-[90vh] max-h-[90vh]">
        
        {/* Title Section */}
        <div className="bg-green-600 flex justify-center font-bold text-2xl p-4 text-white mb-4">
          Welcome to the Chatbot
        </div>

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[65vh]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-2xl max-w-lg md:max-w-md ${msg.role === "user"
                  ? "bg-[#dcf8c6] text-right shadow-lg"
                  : "bg-blue-200 text-left shadow-lg"
                  }`}
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            </div>
          ))}
        </div>

        {/* Input Section */}
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="p-3 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
