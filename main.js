function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}
document.getElementById("settings-button").addEventListener('click', openSettings)

var userName;
userName = localStorage.getItem('receivedName');

if (userName == null) {
   userName = "friend";
}
document.getElementById("name-form").addEventListener('submit', function (e) {
   console.log({ e })
   changeName();
   e.preventDefault()
});
function saveName() {
   userName = localStorage.setItem('receivedName', userName);
   getGreeting()
}


function changeName() {
   userName = document.getElementById("name-input").value;
   saveName();
}


function getGreeting() {
   userName = localStorage.getItem('receivedName');
   document.getElementById("greeting").innerHTML = `Hello, ${userName}. Enjoy your day!`;
}

getGreeting()
