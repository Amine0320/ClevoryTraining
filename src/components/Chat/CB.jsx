import React, { useState, useRef  } from "react";
import "./CB.css"; 

// CB STANDS FOR CHAT BOT 
const CB = () => {
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);
  const [userMessage, setUserMessage] = useState("");
  const API_KEY = "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"; // Paste your API key here
  const inputInitHeight = chatInputRef.current?.scrollHeight;

  const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    return (
      <li className={`chat ${className}`}>
        {className === "outgoing" ? (
          <p>{message}</p>
        ) : (
          <> 
            <span className="material-symbols-outlined">smart_toy</span>
            <p>{message}</p>
          </>
        )}
      </li>
    );
  };

  const generateResponse = async (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      messageElement.textContent = data.choices[0].message.content.trim();
    } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Il ya un probleme . merci d'essayer plus tard .";
    } finally {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  const handleChat = () => {
    const trimmedMessage = userMessage.trim(); // Get user entered message and remove extra whitespace
    if (!trimmedMessage) return;

    // Clear the input textarea and set its height to default
    setUserMessage("");
    chatInputRef.current.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatboxRef.current.appendChild(createChatLi(trimmedMessage, "outgoing"));
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

    setTimeout(() => {
      // Display "Thinking..." message while waiting for the response
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      generateResponse(incomingChatLi);
    }, 600);
  };

  const handleInputChange = (e) => {
    // Adjust the height of the input textarea based on its content
    chatInputRef.current.style.height = `${inputInitHeight}px`;
    chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
    setUserMessage(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    // If Enter key is pressed without Shift key and the window
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <>
      <button className="chatbot-toggler" onClick={() => document.body.classList.toggle("show-chatbot")}>
        <span className="material-symbols-rounded">Chat</span>
        <span className="material-symbols-outlined">fermer</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined" onClick={() => document.body.classList.remove("show-chatbot")}>fermer</span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Salut Bienvenue a Clevory  👋<br />Comment je peux vous aidez ?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Entrer un message..."
            spellCheck="false"
            required
            value={userMessage}
            onChange={handleInputChange}
            ref={chatInputRef}
          />
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>envoyer</span>
        </div>
      </div>
    </>
  );
};
export default CB; 
