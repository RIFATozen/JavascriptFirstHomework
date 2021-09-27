let username = prompt("Adınız Nedir");
let user = document.querySelector("#myName");
if (username) {
  user.innerHTML = username;
} else {
  user.innerHTML = "canım";
}

function Clock() {
  let currDate = new Date();

  let currHour = currDate.getHours();
  let currMinute = currDate.getMinutes();
  let currSecond = currDate.getSeconds();
  let currDay = currDate.getDay();

  switch (currDay) {
    case 0:
      currDay = "Pazar";
      break;
    case 1:
      currDay = "Pazartesi";
      break;
    case 2:
      currDay = "Salı";
      break;
    case 3:
      currDay = "Çarşamba";
      break;
    case 4:
      currDay = "Perşembe";
      break;
    case 5:
      currDay = "Cuma";
      break;
    case 6:
      currDay = "Cumartesi";
      break;
  }
  currHour = currHour < 10 ? "0" + currHour : currHour;
  currMinute = currMinute < 10 ? "0" + currMinute : currMinute;
  currSecond = currSecond < 10 ? "0" + currSecond : currSecond;

  let date = `${currHour}:${currMinute}:${currSecond} ${currDay}`;

  document.querySelector("#myClock").innerHTML = date;
}

setInterval("Clock()", 1000);
