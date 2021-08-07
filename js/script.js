const socket = io("http://localhost:8000");

const form = document.querySelector("#form");
const messageInput = document.querySelector(".inputMsg");
const messageContainer = document.querySelector(".container");

const append = (message, position) => {
  const messageElement = document.createElement("p");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
};

var fname = prompt("Enter your name to join");
socket.emit("new user-joined", fname);

//
socket.on("user-joined", (fname) => {
  append(`${fname} joined the chat`, "right");
});
