function openChat(name) {

    document.querySelector(".chats").style.display = "none";
    document.querySelector(".header").style.display = "none";

    document
    .getElementById("message-screen")
    .classList.remove("hidden");


    document
    .getElementById("chat-name")
    .innerText = name;

}



function sendMessage() {

    let input = document.getElementById("message-input");

    let text = input.value;


    if(text === "") {
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

    const chats = document.querySelector(".chats");
    const profile = document.querySelector(".profile-screen");
    const contacts = document.querySelector(".contacts-screen");


    chats.style.display = "none";
    profile.classList.add("hidden");
    contacts.classList.add("hidden");


    if(screen === "chats") {

        chats.style.display = "block";

    }


    if(screen === "profile") {

        profile.classList.remove("hidden");

    }


    if(screen === "contacts") {

        contacts.classList.remove("hidden");

    }

}