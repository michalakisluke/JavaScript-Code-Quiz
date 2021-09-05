var choiceLength = 4;
var globalQuestionIndex = 0;
var timeLeft = 60;
let scoresArray; 
let correctVar;

function checkScore() {
  scoresArray =  JSON.parse(window.localStorage.getItem('score')) || [];
}

checkScore();

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
     question: "How can you get a webpage to run JavaScript?",
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
    document.querySelector("#high-scores-homepage").removeEventListener("click", openScoresHome);
    document.querySelector("#high-scores-homepage").setAttribute("id", "high-scores-game")
    document.getElementById("high-scores-game").addEventListener("click", openScoresGame);
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
    //Create h2 to display right or wrong
    var prevAns = document.createElement("h2");
    prevAns.setAttribute("id", "previous-answer");
    document.querySelector("#quiz-content").appendChild(prevAns);
    //Verify answer
    document.getElementById("choice-a").addEventListener("click", checkAnswer);
    document.getElementById("choice-b").addEventListener("click", checkAnswer);
    document.getElementById("choice-c").addEventListener("click", checkAnswer);
    document.getElementById("choice-d").addEventListener("click", checkAnswer);
  }
  if (globalQuestionIndex === 1 || globalQuestionIndex === 2 || globalQuestionIndex === 3 || globalQuestionIndex === 4) {
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
    //Write to h2
    if (correctVar === 0) {
      document.getElementById("previous-answer").innerHTML = "Your last answer was right!";
    }
    if (correctVar === 1) {
      document.getElementById("previous-answer").innerHTML = "Your last answer was wrong!";
    }
    //Verify answer
    document.getElementById("choice-a").addEventListener("click", checkAnswer);
    document.getElementById("choice-b").addEventListener("click", checkAnswer);
    document.getElementById("choice-c").addEventListener("click", checkAnswer);
    document.getElementById("choice-d").addEventListener("click", checkAnswer);
  }
  if (globalQuestionIndex === 5) {
    document.getElementById("high-scores-game").removeEventListener("click", openScoresGame);
    document.getElementById("high-scores-game").setAttribute("id", "high-scores-endgame");
    document.getElementById("high-scores-endgame").addEventListener("click", openScoresEndgame);
    if (correctVar === 0) {
      document.getElementById("previous-answer").innerHTML = "Your last answer was right!";
    }
    if (correctVar === 1) {
      document.getElementById("previous-answer").innerHTML = "Your last answer was wrong!";
    }
    saveScores();
  }
}

function checkAnswer(event) {
  event.preventDefault();
  var ansChoice = event.target.value;
  if (ansChoice === ques[globalQuestionIndex].answer) {
    correctVar = 0;
    globalQuestionIndex++;
    gamePlayStart();
  }
  else {
    timeLeft = timeLeft - 5;
    correctVar = 1;
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
  document.querySelector("#username-prompt").innerHTML = "Please Enter Your Initials and Click Save, then Click High Scores to see the Leaderboard!";
  document.querySelector("#quiz-content").appendChild(usernameTextBox);
  document.querySelector("#quiz-content").appendChild(saveButton);
  document.querySelector("#username-save-button").addEventListener("click", storeData);
}

function storeData() {
  var savedUsername = document.getElementById("username-text-box").value;
  var score = timeLeft + 1;
  scoresArray.push([savedUsername, score]);
  localStorage.setItem("score", JSON.stringify(scoresArray));
}

function openScoresHome(){
  scoresArray =  JSON.parse(window.localStorage.getItem('score'));
  timeLeft = -1;
  document.querySelector("#title").innerHTML = "High Scores"
  document.querySelector("#start-prompt").remove();
  document.querySelector("#high-scores-homepage").remove();
  document.querySelector("#game-time").remove();
  document.querySelector("#choice-a").remove();
  document.querySelector("#choice-b").remove();
  document.querySelector("#choice-c").remove();
  document.querySelector("#choice-d").remove();
  document.querySelector("#start-button").remove();
  var goBack = document.createElement("button");
  goBack.innerHTML = "Go Back";
  goBack.setAttribute("id","go-back");
  goBack.addEventListener("click", refreshPage);
  var scoresList = document.createElement("ol");
  scoresList.setAttribute("id", "scores-list");
  document.querySelector("#quiz-content").appendChild(scoresList);
  document.querySelector("#quiz-content").appendChild(goBack);
  var clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clear-button");
  clearButton.innerHTML = "Clear High Scores";
  document.querySelector("#quiz-content").appendChild(clearButton);
  document.querySelector("#clear-button").addEventListener("click", clearScores);
  for (var i = 0; i < scoresArray.length; i++) {
    // Sort scores
    scoresArray.sort(function(a,b) {
      let varA;
      let varB;
      varA = a[1];
      varB = b[1];
      if (varA < varB) {
        return 1;
      }
      else if (varB < varA) {
        return -1;
      }
      return 0;
    });
    // generate scores list
    var placedScore = scoresArray[i][0];
    var placedName = scoresArray[i][1];
    var placed = document.createElement("li");
    placed.setAttribute("id", "listed-scores");
    placed.textContent = placedScore + " - " + placedName;
    document.querySelector("#scores-list").appendChild(placed);
  }
}

function openScoresGame(){
  scoresArray =  JSON.parse(window.localStorage.getItem('score'));
  timeLeft = -1;
  document.getElementById("previous-answer").remove();
  document.querySelector("#question").innerHTML = "High Scores"
  document.querySelector("#high-scores-game").remove();
  document.querySelector("#game-time").remove();
  document.querySelector("#choice-a").remove();
  document.querySelector("#choice-b").remove();
  document.querySelector("#choice-c").remove();
  document.querySelector("#choice-d").remove();
  var goBack = document.createElement("button");
  goBack.innerHTML = "Go Back";
  goBack.setAttribute("id","go-back");
  goBack.addEventListener("click", refreshPage);
  var scoresList = document.createElement("ol");
  scoresList.setAttribute("id", "scores-list");
  document.querySelector("#quiz-content").appendChild(scoresList);
  document.querySelector("#quiz-content").appendChild(goBack);
  var clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clear-button");
  clearButton.innerHTML = "Clear High Scores";
  document.querySelector("#quiz-content").appendChild(clearButton);
  document.querySelector("#clear-button").addEventListener("click", clearScores);
  for (var i = 0; i < scoresArray.length; i++) {
    // Sort scores
    scoresArray.sort(function(a,b) {
      let varA;
      let varB;
      varA = a[1];
      varB = b[1];
      if (varA < varB) {
        return 1;
      }
      else if (varB < varA) {
        return -1;
      }
      return 0;
    });
    // generate scores list
    var placedScore = scoresArray[i][0];
    var placedName = scoresArray[i][1];
    var placed = document.createElement("li");
    placed.setAttribute("id", "listed-scores");
    placed.textContent = placedScore + " - " + placedName;
    document.querySelector("#scores-list").appendChild(placed);
  }
}

function openScoresEndgame(){
  scoresArray =  JSON.parse(window.localStorage.getItem('score'));
  timeLeft = -1;
  document.getElementById("previous-answer").remove();
  document.querySelector("#score-save").innerHTML = "High Scores"
  document.querySelector("#high-scores-endgame").remove();
  document.querySelector("#game-time").remove();
  document.querySelector("#username-prompt").remove();
  document.querySelector("#username-text-box").remove();
  document.querySelector("#username-save-button").remove();
  var goBack = document.createElement("button");
  goBack.innerHTML = "Go Back";
  goBack.setAttribute("id","go-back");
  goBack.addEventListener("click", refreshPage);
  var scoresList = document.createElement("ol");
  scoresList.setAttribute("id", "scores-list");
  document.querySelector("#quiz-content").appendChild(scoresList);
  document.querySelector("#quiz-content").appendChild(goBack);
  var clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clear-button");
  clearButton.innerHTML = "Clear High Scores";
  document.querySelector("#quiz-content").appendChild(clearButton);
  document.querySelector("#clear-button").addEventListener("click", clearScores);
  for (var i = 0; i < scoresArray.length; i++) {
    // Sort scores
    scoresArray.sort(function(a,b) {
      let varA;
      let varB;
      varA = a[1];
      varB = b[1];
      if (varA < varB) {
        return 1;
      }
      else if (varB < varA) {
        return -1;
      }
      return 0;
    });
    // generate scores list
    var placedScore = scoresArray[i][0];
    var placedName = scoresArray[i][1];
    var placed = document.createElement("li");
    placed.setAttribute("id", "listed-scores");
    placed.textContent = placedScore + " - " + placedName;
    document.querySelector("#scores-list").appendChild(placed);
  }
}

function refreshPage() {
  location.reload();
}

function clearScores() {
  localStorage.clear();
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
        alert("Sorry, you lose! Refresh the page to play again!");        
        clearInterval(timer);
        }
      if (globalQuestionIndex === 5) {
        clearInterval(timer);
      }
    }, 1000);
  }

document.getElementById("start-button").addEventListener("click", countdown);
document.getElementById("start-button").addEventListener("click", gamePlayStart);
document.getElementById("high-scores-homepage").addEventListener("click", openScoresHome);