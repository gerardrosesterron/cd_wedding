
window.onload = function()
{
    var current = new Date()
    var wedding_date = new Date("Oct 16, 2023 00:00:00")

    if(current.getTime() < wedding_date.getTime()){
        document.getElementById("before_date").style.display = 'block';
      }
      else if(current.getTime() > wedding_date.getTime()){
        document.getElementById("after_date").style.display = 'block';
        
       }
    }

// Set the date we're counting down to
var wedding_date = new Date("Oct 20, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = wedding_date - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
}
}, 1000);

