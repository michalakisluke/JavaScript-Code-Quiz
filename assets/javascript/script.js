var questionCount = 5;
var ques = [
    {
     question: "How do you send an alert to the screen?",
     choices: ["alert()", "confirm()", "function()", "addEventListener"],
     answer: "alert()"
    },
        
    {
     question: "Where can you test JavaScript commands and view errors?",
     choices: ["Chrome devTools", "Nowhere", "GitHub", "W3 Schools"],
     answer: "Chrome devTools"
    },

    {
     question: "How can you get a webpage to run JavaScript",
     choices: ["It's automatic", "Use <script> in the HTML", "Use <script> in the CSS", "You can't"],
     answer: "alert()"
    },

    {
     question: "How do you make buttons clickable?",
     choices: ["It's part of the HTML <button>", "confirm()", "addEventListener()", "querySelector()"],
     answer: "addEventListener()"
    },

    {
     question: "Is JavaScript fun?",
     choices: ["Of course!", "Not at all", "What's JavaScript", "Maybe, but it is useful"],
     answer: "Maybe, but it is useful"
    }
]

function gamePlay() {
  document.querySelector("#start-button").innerHTML = "Submit"
  document.getElementById("start-button").setAttribute("id", "submit-button");
  for (i = 0; i < questionCount; i++) {

  }
}

var saveScore = function() {

}

function countdown() {
    var timeLeft = 120;
    var timer = setInterval(function() {
      if (timeLeft > 1) {
        document.getElementById("game-time").innerHTML = "Time Remaining: " + timeLeft + " seconds left!";
        timeLeft--
        }
      else if (timeLeft === 1) {
        document.getElementById("game-time").innerHTML = "Time Remaining: " + timeLeft + " second left!";
        timeLeft--;
        }
      else if (timeLeft === 0) {
        document.getElementById("game-time").innerHTML = "Time Remaining: " + timeLeft + " seconds left!";         
        clearInterval(timer);
        }
    }, 1000);
  }

document.getElementById("start-button").addEventListener("click", countdown);
document.getElementById("start-button").addEventListener("click", gamePlay);
