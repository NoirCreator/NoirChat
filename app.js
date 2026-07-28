const button = document.querySelector("button");
const input = document.querySelector("input");

button.onclick = function() {

    let username = input.value;

    if(username === "") {
        alert("Введите имя пользователя");
    } 
    else {
        alert("Добро пожаловать в NoirChat, " + username + "!");
    }

};
