var choiceLength = 4;
var globalQuestionIndex = 0;

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
     choices: ["It's part of the HTML button element", "confirm()", "addEventListener()", "querySelector()"],
     answer: "addEventListener()"
    },

    {
     question: "Is JavaScript fun?",
     choices: ["Of course!", "Not at all", "What's JavaScript", "Maybe, but it is useful"],
     answer: "Maybe, but it is useful"
    }
]

function gamePlayStart() {
  // Modify page format, prep for introducing question
  document.querySelector("#start-button").remove();
  document.getElementById("title").setAttribute("id", "question");
  //Assign new inner HTML to question, remove <p> element
  document.getElementById("question").innerHTML = ques[globalQuestionIndex].question;
  document.getElementById("start-prompt").remove();
  //Generate Choices, append to element
  var ansButtonA = document.createElement("button");
  var ansButtonB = document.createElement("button");
  var ansButtonC = document.createElement("button");
  var ansButtonD = document.createElement("button");
  ansButtonA.innerHTML = ques[globalQuestionIndex].choices[0];
  ansButtonB.innerHTML = ques[globalQuestionIndex].choices[1];
  ansButtonC.innerHTML = ques[globalQuestionIndex].choices[2];
  ansButtonD.innerHTML = ques[globalQuestionIndex].choices[3];
  ansButtonA.setAttribute("id", "ans-choice-buttonA");
  ansButtonB.setAttribute("id", "ans-choice-buttonB");
  ansButtonC.setAttribute("id", "ans-choice-buttonC");
  ansButtonD.setAttribute("id", "ans-choice-buttonD");
  ansButtonA.setAttribute("value", ques[globalQuestionIndex].choices[0]);
  ansButtonB.setAttribute("value", ques[globalQuestionIndex].choices[1]);
  ansButtonC.setAttribute("value", ques[globalQuestionIndex].choices[2]);
  ansButtonD.setAttribute("value", ques[globalQuestionIndex].choices[3]);
  document.getElementById("choice-a").appendChild(ansButtonA);
  document.getElementById("choice-b").appendChild(ansButtonB);
  document.getElementById("choice-c").appendChild(ansButtonC);
  document.getElementById("choice-d").appendChild(ansButtonD);
  //Verify answer
  document.getElementById("choice-a").addEventListener("click", checkAnswer);
  document.getElementById("choice-b").addEventListener("click", checkAnswer);
  document.getElementById("choice-c").addEventListener("click", checkAnswer);
  document.getElementById("choice-d").addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
  event.preventDefault();
  var ansChoice = document.getElementsByTagName("button").value;
  console.log(ansChoice);
  console.log(ques[globalQuestionIndex].answer)
  if (ansChoice === ques[globalQuestionIndex].answer) {
    alert("right test");
  }
  else {
    alert("wrong test");
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
document.getElementById("start-button").addEventListener("click", gamePlayStart);
//document.getElementById("submit-button").addEventListener("click", gamePlay);
