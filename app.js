const chats = document.querySelectorAll(".chat");

chats.forEach(chat => {

    chat.onclick = function() {

        let name = chat.querySelector("h3").innerText;

        alert("Открыт чат с " + name);

    };

});