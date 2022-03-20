// create and commit HTML elements to javascript memory using javascript variables

// The following the HTML elements for the header:
var body = document.body;
var header = document.createElement("header");
var highScoreButton = document.createElement("button");
    highScoreButton.textContent = "View High Scores";
var timerCard = document.createElement("div");
    // timerCard.textContent = "Time: "
    console.log(timerCard);

// The following are the HTML elements for the opening panel, beneath the header to the page

var openingPanel = document.createElement("div");
var headerOfOpeningPanel = document.createElement("h1");
    headerOfOpeningPanel.textContent = "Coding Quiz Challenge";
var paragraphOfOpeningPanel = document.createElement("p");
    paragraphOfOpeningPanel.textContent = "Try to answer \r\n the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";

    // add the html elements for the header and opening panel to the DOM, so they load when the page loads

    body.appendChild(header);
    header.appendChild(highScoreButton);
    header.appendChild(timerCard);

    body.appendChild(openingPanel);
    openingPanel.appendChild(headerOfOpeningPanel);
    openingPanel.appendChild(paragraphOfOpeningPanel);
    openingPanel.appendChild(startButton);

// style the header elements
header.setAttribute("style", "display: flex; justify-content: space-between");

// style the openingPanel

openingPanel.setAttribute("style", "display: flex; flex-direction: column; align-items: center");



// FIRST QUESTION PANEL: Create the HTML elements of the panel for the FIRST question

// create div to contain entire first question panel.
var firstQuestionPanel = document.createElement("div");

// style the firstQuestionPanel

firstQuestionPanel.setAttribute("style", "display: flex; flex-direction: column; align-items: center");
    
    // create h1 element to present the question
var headerOfPanelQ1 = document.createElement("h1");

    // create iv to contain the answer buttons
var buttonDivQ1 = document.createElement("div")

// style the button container div
buttonDivQ1.setAttribute("style", "display: flex; align-items: start; justify-content: start; flex-direction: column");

    // create the answer buttons
var firstButtonQ1 = document.createElement("button");
var secondButtonQ1 = document.createElement("button");
var thirdButtonQ1 = document.createElement("button");
var fourthButtonQ1 = document.createElement("button");



// Append the answer buttons to the button container

    buttonDivQ1.appendChild(firstButtonQ1);
    buttonDivQ1.appendChild(secondButtonQ1);
    buttonDivQ1.appendChild(thirdButtonQ1);
    buttonDivQ1.appendChild(fourthButtonQ1);

// console.log to check fobugs
console.log(buttonDivQ1);

    // create a div to display whether answer to question was right or wrong

var rightOrWrongQ1 = document.createElement("div");


// Add the text content for the header for the first question:

    headerOfPanelQ1.textContent = "Commonly used data types DO NOT include:"

// Add text content to the buttons for quesitons 1:

    firstButtonQ1.textContent = "1. strings";
    secondButtonQ1.textContent = "2. booleans";
    thirdButtonQ1.textContent = "3. alerts";
    fourthButtonQ1.textContent = "4. numbers";

// Add class attributes to buttons

    firstButtonQ1.setAttribute("class", "wrongAnswer");
    secondButtonQ1.setAttribute("class", "wrongAnswer");
    thirdButtonQ1.setAttribute("class", "rightAnswer");
    fourthButtonQ1.setAttribute("class", "wrongAnswer");

// append header and buttons and rightorWrong div to the question panel

firstQuestionPanel.appendChild(headerOfPanelQ1);
firstQuestionPanel.appendChild(buttonDivQ1);
firstQuestionPanel.appendChild(rightOrWrongQ1);


// SECOND QUESTION PANEL: Create HTML elements of panel for SECOND question

var secondQuestionPanel = document.createElement("div");

// style the secondQuestionPanel

secondQuestionPanel.setAttribute("style", "display: flex; flex-direction: column; align-items: center");

var headerOfPanelQ2 = document.createElement("h1");

// var answersToQ2 = document.createElement("div");
// var answwersToQ2 = document.createElement("ul");

// create a div to be the container for the buttons
var buttonDivQ2 = document.createElement("div")

// style the button container div
buttonDivQ2.setAttribute("style", "display: flex; align-items: start; justify-content: start; flex-direction: column");

var firstButtonQ2 = document.createElement("button");
var secondButtonQ2 = document.createElement("button");
var thirdButtonQ2 = document.createElement("button");
var fourthButtonQ2 = document.createElement("button");

// Append the buttons to buttonDivQ2

    buttonDivQ2.appendChild(firstButtonQ2);
    buttonDivQ2.appendChild(secondButtonQ2);
    buttonDivQ2.appendChild(thirdButtonQ2);
    buttonDivQ2.appendChild(fourthButtonQ2);

console.log(buttonDivQ2);

var rightOrWrongQ2 = document.createElement("div");


// Add the text content for the header for question:

    headerOfPanelQ2.textContent = "The condition in an if / else statement is enclosed within ___.";

// Add text content to the buttons for quesitons:

    firstButtonQ2.textContent = "1. quotes";
    secondButtonQ2.textContent = "2. curly brackets";
    thirdButtonQ2.textContent = "3. parentheses";
    fourthButtonQ2.textContent = "4. square brackets";

    // Add class attributes to buttons

    firstButtonQ2.setAttribute("class", "wrongAnswer");
    secondButtonQ2.setAttribute("class", "rightAnswer");
    thirdButtonQ2.setAttribute("class", "wrongAnswer");
    fourthButtonQ2.setAttribute("class", "wrongAnswer");


// append header and buttons and rightorWrong to secondQuestionPanel

secondQuestionPanel.appendChild(headerOfPanelQ2);
secondQuestionPanel.appendChild(buttonDivQ2);
secondQuestionPanel.appendChild(rightOrWrongQ2);

console.log(secondQuestionPanel);

// THIRD QUESTION PANEL: Create HTML elements of panel for THIRD question

var thirdQuestionPanel = document.createElement("div");
var headerOfPanelQ3 = document.createElement("h1");

var buttonDivQ3 = document.createElement("div")

var firstButtonQ3 = document.createElement("button");
var secondButtonQ3 = document.createElement("button");
var thirdButtonQ3 = document.createElement("button");
var fourthButtonQ3 = document.createElement("button");

// Append the buttons to buttonDivQ3

    buttonDivQ3.appendChild(firstButtonQ3);
    buttonDivQ3.appendChild(secondButtonQ3);
    buttonDivQ3.appendChild(thirdButtonQ3);
    buttonDivQ3.appendChild(fourthButtonQ3);

console.log(buttonDivQ3);

var rightOrWrongQ3 = document.createElement("div");


// Add the text content for the header for question 3:

    headerOfPanelQ3.textContent = "Arrays in JavaScript can be used to store ___.";

// Add text content to the buttons for quesitons 3:

    firstButtonQ3.textContent = "1. numbers and strings";
    secondButtonQ3.textContent = "2. other arrays";
    thirdButtonQ3.textContent = "3. booleans";
    fourthButtonQ3.textContent = "4. all of the above";

// Add class attributes to buttons

    firstButtonQ3.setAttribute("class", "wrongAnswer");
    secondButtonQ3.setAttribute("class", "wrongAnswer");
    thirdButtonQ3.setAttribute("class", "wrongAnswer");
    fourthButtonQ3.setAttribute("class", "rightAnswer");

// append header and buttons and RightOrWrong div to thirdQuestionPanel

thirdQuestionPanel.appendChild(headerOfPanelQ3);
// code breaks here.  Why?

thirdQuestionPanel.appendChild(buttonDivQ3);
thirdQuestionPanel.appendChild(rightOrWrongQ3);

console.log(thirdQuestionPanel);


// FOURTH QUESTION PANEL: Create HTML elements of panel for FOURTH question

var fourthQuestionPanel = document.createElement("div");
var headerOfPanelQ4 = document.createElement("h1");

var buttonDivQ4 = document.createElement("div")

var firstButtonQ4 = document.createElement("button");
var secondButtonQ4 = document.createElement("button");
var thirdButtonQ4 = document.createElement("button");
var fourthButtonQ4 = document.createElement("button");

// Append the buttons to buttonDivQ4

    buttonDivQ4.appendChild(firstButtonQ3);
    buttonDivQ4.appendChild(secondButtonQ3);
    buttonDivQ4.appendChild(thirdButtonQ3);
    buttonDivQ4.appendChild(fourthButtonQ3);

console.log(buttonDivQ4);

var rightOrWrongQ4 = document.createElement("div");

// Add the text content for the header for question 4:

    headerOfPanelQ4.textContent = "A very useful tool used during development and debuggin for printing content to the debugger is:";

// Add text content to the buttons for quesitons 4:

    firstButtonQ4.textContent = "1. JavaScript";
    secondButtonQ4.textContent = "2. terminal/bash";
    thirdButtonQ4.textContent = "3. for loops";
    fourthButtonQ4.textContent = "4. console.log";

// Add class attributes to buttons

     firstButtonQ4.setAttribute("class", "wrongAnswer");
     secondButtonQ4.setAttribute("class", "wrongAnswer");
     thirdButtonQ4.setAttribute("class", "wrongAnswer");
     fourthButtonQ4.setAttribute("class", "wrongAnswer");

// append header and buttons and rightOrWrong div to fourthQuestionPanel

fourthQuestionPanel.appendChild(headerOfPanelQ4);
fourthQuestionPanel.appendChild(buttonDivQ4);
fourthQuestionPanel.appendChild(rightOrWrongQ4);



// FIFTH QUESTION PANEL: Create HTML elements of panel for FIFTH question

var fifthQuestionPanel = document.createElement("div");
var headerOfPanelQ5 = document.createElement("h1");

var buttonDivQ5 = document.createElement("div")

var firstButtonQ5 = document.createElement("button");
var secondButtonQ5 = document.createElement("button");
var thirdButtonQ5 = document.createElement("button");
var fourthButtonQ5 = document.createElement("button");

// Append the buttons to buttonDivQ4

    buttonDivQ5.appendChild(firstButtonQ5);
    buttonDivQ5.appendChild(secondButtonQ5);
    buttonDivQ5.appendChild(thirdButtonQ5);
    buttonDivQ5.appendChild(fourthButtonQ5);

console.log(buttonDivQ5);

var rightOrWrongQ5 = document.createElement("div");

// Add the text content for the header for question:

    headerOfPanelQ5.textContent = "String values must be enclosed within ___ when being assigned to variables.";

// Add text content to the buttons for quesitons:

    firstButtonQ5.textContent = "1. commans";
    secondButtonQ5.textContent = "2. curly brackets";
    thirdButtonQ5.textContent = "3. quotes";
    fourthButtonQ5.textContent = "4. parentheses";

// Add class attributes to buttons

    firstButtonQ5.setAttribute("class", "wrongAnswer");
    secondButtonQ5.setAttribute("class", "wrongAnswer");
    thirdButtonQ5.setAttribute("class", "rightAnswer");
    fourthButtonQ5.setAttribute("class", "wrongAnswer");

// append header and buttons and rightorWrong div to fourthQuestionPanel

fifthQuestionPanel.appendChild(headerOfPanelQ5);
fifthQuestionPanel.appendChild(buttonDivQ5);
fifthQuestionPanel.appendChild(rightOrWrongQ5);


// RESULTS PANEL: CREATE HTML ELEMENTS FOR RESULTS PANEL

// create div for Results panel

var resultsPanel = document.createElement("div");
var resultsPanelHeader = document.createElement("h1");
var resultsPanelScore = document.createElement("div");
var resultsPanelForm = document.createElement("form");

// HIGH SCORE PANEL: CREATE HTML ELEMENTS FOR HIGH SCORE PANEL

// create div for High Score Panel

var highScoresPanel = document.createElement("div");
var highSchoresHeader = document.createElement ("h1")
var highScorer = document.createElement("div");
var highScoresPanelButtons = document.createElement("div");
var goBackButton = document.createElement("button");
var clearScoresButton = document.createElement("button");


// CREATE FUNCTIONS TO COLLECT AND PROCESS DATA RECEIVED FROM USER INTERACTNG WITH THE PANELS:

//   create a timer function that will be called when start button is clicked
    timerCard.textContent = "Time: 0";
    var timer;
    var secondsLeft = 45;

    function startTimer() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timerCard.textContent = "Time: " + secondsLeft;
        }, 1000);
    }

  
// create a function that replaces opening panel with firstQuestionPanel, and starts timer, when start button is clicked.
  startButton.addEventListener("click", function(event) {

          body.removeChild(openingPanel);
          body.appendChild(firstQuestionPanel);
          startTimer();
                  
  });

//   create a function that is called when user clicks on correct answer to the first question
  firstQuestionPanel.addEventListener("click", function(event) {
      var firstQuestionAnswer = event.target;

      if (firstQuestionAnswer.matches(".rightAnswer")) {
          body.removeChild(firstQuestionPanel);
          body.appendChild(secondQuestionPanel);
      }
    
        // I WILL ADD OTHER JAVASCRIPT ACTIONS TO THIS IF STATEMENT HERE LATER

      });

// create a function that is called when user clicks on correct answer to the second question

secondQuestionPanel.addEventListener("click", function(event) {
    var secondQuestionAnswer = event.target;

    if (secondQuestionAnswer.matches(".rightAnswer")) {
        body.removeChild(secondQuestionPanel);
        body.appendChild(thirdQuestionPanel);
        console.log(thirdQuestionPanel);
    }

});

// create a function that is called when user clicks on correct answer to the third question

thirdQuestionPanel.addEventListener("click", function(event) {
    var thirdQuestionAnswer = event.target;

    if (thirdQuestionAnswer.matches(".rightAnswer")) {
        body.removeChild(thirdQuestionPanel);
        body.appendChild(fourthQuestionPanel);
    }

});

// create a function that is called when user clicks on correct answer to the fourth question

fourthQuestionPanel.addEventListener("click", function(event) {
    var fourthQuestionAnswer = event.target;

    if (fourthQuestionAnswer.matches(".rightAnswer")) {
        body.removeChild(fourthQuestionPanel);
        body.appendChild(fifthQuestionPanel);
    }

});





