function openChat(name) {

    document
    .getElementById("chats-screen")
    .classList.add("hidden");


    document
    .getElementById("message-screen")
    .classList.remove("hidden");


    document
    .getElementById("chat-name")
    .innerText = name;



    document
    .getElementById("messages")
    .innerHTML = `

        <div class="message incoming my-message">

            <div>
                Привет! Добро пожаловать в NoirChat 🖤
            </div>

            <span>
                12:40
            </span>

        </div>

    `;

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

    let input =
    document.getElementById("message-input");


    let text =
    input.value;


    if(text.trim() === "") {
        return;
    }


    let time =
    new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });



    let message =
    document.createElement("div");


    message.className = "message outgoing";


    message.innerHTML = `

        <div>
            ${text}
        </div>

        <span>
            ${time}
        </span>

    `;



    document
    .getElementById("messages")
    .appendChild(message);



    input.value = "";


    document
    .getElementById("messages")
    .scrollTop =
    document.getElementById("messages").scrollHeight;

}




function showScreen(screen) {


    document
    .getElementById("chats-screen")
    .classList.add("hidden");


    document
    .getElementById("message-screen")
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