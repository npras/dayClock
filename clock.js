const dayHand = document.querySelector('.day-hand');
const value = document.querySelector('.value span');

function degreesOf(numer, denom) {
  return Math.round(numer / denom * 360) + 90;
}

function percentOf(numer, denom) {
  return Math.round(numer / denom * 100);
}

let times = 0;
function setDate() {
  times += 1;
  console.log(`called times: ${times}`);
  const now = new Date();
  const goneHours = now.getHours() + now.getMinutes()/60;
  const goneHoursDegrees = degreesOf(goneHours, 24);
  const goneHoursPercent = percentOf(goneHours, 24);
  dayHand.style.transform = `rotate(${goneHoursDegrees}deg)`;
  value.innerHTML = `${goneHoursPercent}`;
}

setDate();
setInterval(setDate, 1000 * 60 * 5); // 5 minute

