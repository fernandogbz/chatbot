const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return; // return if the chat input field is empty
  
  createChatLi(userMessage, "outgoing");
}

sendChatBtn.addEventListener("click", handleChat);