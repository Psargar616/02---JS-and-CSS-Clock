const second_hand = document.querySelector(".second-hand");
const minute_hand = document.querySelector(".min-hand");
const hour_hand = document.querySelector(".hour-hand");

setInterval(() => {
  d = new Date();
  htime = d.getHours();
  let newformat = htime >= 12 ? "PM" : "AM";

  mtime = d.getMinutes();

  stime = d.getSeconds();
  // console.log(htime)
  // console.log(mtime)
  // console.log(stime)

  hrotation = (30 * htime + mtime / 2) + 90;
  mrotation = 6 * mtime + 90;
  srotation = 6 * stime + 90 ;

  hour_hand.style.transform = `rotate(${hrotation}deg)`;
  minute_hand.style.transform = `rotate(${mrotation}deg)`;
  second_hand.style.transform = `rotate(${srotation}deg)`;
  let sound = new Audio("clock-ticking.mp3");
  sound.play();
}, 1000);



// method 2

// function setTime() {
//   const date = new Date();

//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   //   convert seconds, minutes and hours to degrees
//   // added 90deg to offset initial 90deg
//   const seconds_to_degree = (seconds / 60) * 360 + 90;
//   const minutes_to_degree = (minutes / 60) * 360 + 90;
//   const hours_to_degree = (hours / 60) * 360 + 90;
//   // const hours_to_degree = ((hours)*30)

//   //   console.log(seconds);
//   // rotating seconds hand
//   second_hand.style.transform = `rotate(${seconds_to_degree}deg)`;
//   minute_hand.style.transform = `rotate(${minutes_to_degree}deg)`;
//   hour_hand.style.transform = `rotate(${hours_to_degree}deg)`;

//   let sound = new Audio("clock-ticking.mp3");
//   sound.play();
// }

// setInterval(setTime, 1000);


