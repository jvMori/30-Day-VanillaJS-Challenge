const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const time = new Date();

  //get seconds, calculate rotate degree
  const seconds = time.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//minutes
  const minutes = time.getMinutes();
  const minHandDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minHandDegrees}deg)`;


// hours
const hours = time.getHours();;
const hoursDegrees = ((hours / 12) * 360) + 90;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);
