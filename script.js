const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return; // return if the chat input field is empty
  
  createChatLi(userMessage, "outgoing");
}

sendChatBtn.addEventListener("click", handleChat);