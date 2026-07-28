let currentChat = "";


function openChat(name) {

    document.getElementById("chats-screen").style.display = "none";

    document.getElementById("message-screen").classList.remove("hidden");

    document.getElementById("chat-name").innerText = name;

}



function backToChats() {

    document
    .getElementById("message-screen")
    .classList.add("hidden");


    document
    .getElementById("chats-screen")
    .classList.remove("hidden");

}




function sendMessage() {

    let input = document.getElementById("message-input");

    let text = input.value;


    if(text.trim() === "") {
        return;
    }


    let message = document.createElement("div");


    message.className = "message";


    message.innerText = text;


    document
    .getElementById("messages")
    .appendChild(message);


    input.value = "";

}




function showScreen(screen) {


    document
    .getElementById("chats-screen")
    .classList.add("hidden");


    document
    .getElementById("contacts-screen")
    .classList.add("hidden");


    document
    .getElementById("profile-screen")
    .classList.add("hidden");



    if(screen === "chats") {

        document
        .getElementById("chats-screen")
        .classList.remove("hidden");

    }



    if(screen === "contacts") {

        document
        .getElementById("contacts-screen")
        .classList.remove("hidden");

    }



    if(screen === "profile") {

        document
        .getElementById("profile-screen")
        .classList.remove("hidden");

    }

}