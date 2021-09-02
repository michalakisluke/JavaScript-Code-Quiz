var questionCount = 0;
var ques = [
    {question: "How do you send an alert to the screen?",
     choices: ["alert()", "confirm()", "function()", "addEventListener"],
     answer: "alert()"},
        
    {question: "Where can you test JavaScript commands and view errors?",
     choices: ["Chrome devTools", "Nowhere", "GitHub", "W3 Schools"],
     answer: "Chrome devTools"},

     {question: "How can you get a webpage to run JavaScript",
     choices: ["It's automatic", "Use <script> in the HTML", "Use <script> in the CSS", "You can't"],
     answer: "alert()"},

     {question: "How do you make buttons clickable?",
     choices: ["It's part of the HTML <button>", "confirm()", "addEventListener()", "querySelector()"],
     answer: "addEventListener()"},

     {question: "Is JavaScript fun?",
     choices: ["Of course!", "Not at all", "What's JavaScript", "Maybe, but it is useful"],
     answer: "Maybe, but it is useful"}
]


function countdown() {
    var timeLeft = 10;
    var timer = setInterval(function() {
      if(timer > 1) {
        timeLeft--
        document.getElementById("game-time").innerHTML = "Time Remaining: " + time + " seconds";
      }
      else if (timeLeft === 1) {
        document.getElementById("game-time").innerHTML = "Time Remaining: " + time + " second";
        timeLeft--;
      }
    }, 1000);
  }

function startGame() {
    document.getElementById("#start-button").addEventListener("click", countdown);
}
