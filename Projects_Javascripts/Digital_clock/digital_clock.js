const digital_clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  digital_clock.innerHTML = date.toLocaleTimeString();
}, 1000);
