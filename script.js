const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return; // return if the chat input field is empty
  
  createChatLi(userMessage, "outgoing");
}

sendChatBtn.addEventListener("click", handleChat);