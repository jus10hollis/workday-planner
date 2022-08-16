//Variables created
var headerEl = $(".headerEl");
var containerEl = $(".containerEl");
var dayHours = $(".dayHours");
var textareaEl = $("textarea");

var nowHour = new moment().format("HH a");
var renderClock = function () {
  var currentTime = new moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  document.querySelector("#timeDisplay").innerHTML = currentTime;
};
setInterval(renderClock, 1000);

var colorCode = function () {
  var hourTracker = document.querySelectorAll(".dayHours");
  for (var i = 0; i < hourTracker.length; i++) {
    var hourBlock = hourTracker[i].children[0].innerHTML;

    console.log(hourBlock, nowHour);
    if (hourBlock === nowHour) {
      console.log("presentS");
      hourTracker[i].children[1].classList = "present";
    } else {
      hourTracker[i].children[1].classList = "future";
    }
    if (hourBlock.charAt(0) > nowHour.charAt(0)) {
      hourTracker[i].children[1].classList = "past";
    }
  }
};

colorCode();

containerEl.on("click", ".btn", function () {
  console.log($(this).siblings("p").text());
  localStorage.setItem(
    $(this).siblings("p").text(),
    $(this).siblings("textarea").val()
  );
});
