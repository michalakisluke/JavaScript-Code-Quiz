var choiceLength = 4;
var globalQuestionIndex = 0;
var timeLeft = 60;
let scoresArray; 

function checkScore() {
  scoresArray =  JSON.parse(window.localStorage.getItem('score')) || [];
}

console.log(localStorage.getItem('score'));
console.log(scoresArray);

checkScore();

console.log(localStorage.getItem('score'));
console.log(scoresArray);

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
     choices: ["It's automatic", "Use a script element in the HTML", "Use a script element in the CSS", "You can't"],
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
  if (globalQuestionIndex === 0) {
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
  if (globalQuestionIndex === 1 || globalQuestionIndex === 2 || globalQuestionIndex === 3) {
    //Assign new inner HTML to question, remove previous buttons
    document.getElementById("question").innerHTML = ques[globalQuestionIndex].question;
    document.querySelector("#ans-choice-buttonA").remove();
    document.querySelector("#ans-choice-buttonB").remove();
    document.querySelector("#ans-choice-buttonC").remove();
    document.querySelector("#ans-choice-buttonD").remove();
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
  if (globalQuestionIndex === 4) {
    //Assign new inner HTML to question, remove previous buttons
    document.getElementById("question").innerHTML = ques[globalQuestionIndex].question;
    document.querySelector("#ans-choice-buttonA").remove();
    document.querySelector("#ans-choice-buttonB").remove();
    document.querySelector("#ans-choice-buttonC").remove();
    document.querySelector("#ans-choice-buttonD").remove();
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
  if (globalQuestionIndex === 5) {
    saveScores();
  }
}

function checkAnswer(event) {
  event.preventDefault();
  var ansChoice = event.target.value;
  console.log(ansChoice);
  console.log(ques[globalQuestionIndex].answer)
  if (ansChoice === ques[globalQuestionIndex].answer) {
    globalQuestionIndex++;
    gamePlayStart();
  }
  else {
    timeLeft = timeLeft - 5;
    console.log(globalQuestionIndex);
    globalQuestionIndex++;
    gamePlayStart();
  }
}

function saveScores() {
  document.getElementById("question").setAttribute("id", "score-save");
  document.getElementById("score-save").innerHTML = "Good Job! You scored " + timeLeft + " points!"
  document.querySelector("#choice-a").remove();
  document.querySelector("#choice-b").remove();
  document.querySelector("#choice-c").remove();
  document.querySelector("#choice-d").remove();
  var usernamePrompt = document.createElement("p");
  var usernameTextBox = document.createElement("input");
  var saveButton = document.createElement("button");
  usernamePrompt.setAttribute("id","username-prompt");
  usernameTextBox.setAttribute("id", "username-text-box");
  saveButton.setAttribute("id", "username-save-button");
  saveButton.innerHTML = "Save my score!"
  document.querySelector("#quiz-content").appendChild(usernamePrompt);
  document.querySelector("#username-prompt").innerHTML = "Please Enter Your Initials:";
  document.querySelector("#quiz-content").appendChild(usernameTextBox);
  document.querySelector("#quiz-content").appendChild(saveButton);
  document.querySelector("#username-save-button").addEventListener("click", storeData);
}

function storeData() {
  var savedUsername = document.getElementById("username-text-box").value;
  var score = timeLeft + 1;
  console.log(scoresArray);
  scoresArray.push([savedUsername, score]);
  console.log(scoresArray);
  localStorage.setItem("score", scoresArray);
}

function openScores(){
  alert("This works");
}

function countdown() {
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
        alert("Sorry, you lose! Let's look at some winners scores.");        
        //openScores();
        clearInterval(timer);
        }
      if (globalQuestionIndex === 5) {
        clearInterval(timer);
      }
    }, 1000);

  }

document.getElementById("start-button").addEventListener("click", countdown);
document.getElementById("start-button").addEventListener("click", gamePlayStart);
document.getElementById("high-scores-homepage").addEventListener("click", openScores);
