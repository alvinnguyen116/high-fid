function change() {
	var status = $("#change").text();
	if (status == "Asleep") {
		$("#change").html("Awake");
		$("#change").css({"background-color":"#d27719"});
	} else {
		$("#change").html("Asleep");
		$("#change").css({"background-color":"#4b73de"});
	}
}

var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
  var distance = countDownDate - now;


  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $("#time").html(hours + "h "
  + minutes + "m " + seconds + "s ");

}, 1000);

function log_in() {
  $(".home").css({"display":"block"});
  $(".intro").css({"display": "none"});
  console.log("success!");
}

function update() {
  $(".home").css({"display": "none"});
  $(".update").css({"display": "block"});
}

function back() {
    $(".update").css({"display": "none"});
    $(".home").css({"display":"block"});
}