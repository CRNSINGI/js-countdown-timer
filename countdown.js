let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime(); // Set the date counting down

//Update the count down every 1 second 

let x = setInterval(function() {

let now = new Date().getTime(); // Get todays date and time 

let distance = countDownDate - now;  // find the distance between now 

//Time calculations for days, hrs, min and secs

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "d" + hours + "h " + minutes + "m " + seconds + "s"; // Display the result 

})