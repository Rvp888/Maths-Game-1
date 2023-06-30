
let playing = false;
let score;
let action;
let timeRemaining;
let correctAnswer;

// if we click on the start/reset button
document.getElementById("start-reset").onclick = function() {
    //if we are playing
    if(playing == true) {
        location.reload(); // reload page
    } else {// if we are not playing
        //hide game over box
        hide("gameover");
        //change mode to playing
        playing = true
        //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        //show count-down box
        show("time-remaining");
        timeRemaining = 60;
        document.getElementById("time-remaining-value").innerHTML = timeRemaining;
        //change button to reset
        document.getElementById("start-reset").innerHTML = "Reset Game";

        //start countdown
        startCountdown();

        //generate new Q&A
        generateQA();
    }
}

// if we click on the start/reset button
       //if we are playing
           //reload page
       //if we are not playing 
          //set score to 0.   
          //show count-down box
          //reduce time by 1sec in loops
          //time left?
            //yes->continue
            //no->game over
             //change button to reset
             //generate new Q&A


// Clicking on an answer box;

for (let i = 1; i <= 4; i++) {
    document.getElementById("box"+i).onclick = function () {
        //check if we are playing
        if (playing == true) {//yes
            if (this.innerHTML == correctAnswer) {
                //correct answer
                //increase score by 1
                score++;
                document.getElementById("scoreValue").innerHTML = score;
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                //hide correct box after 1 sec
                setTimeout(() => {
                    hide("correct");
                }, 1000);
                //Generate new Q&A
                generateQA();
            }
            else {
                //wrong answer
                //hide correct box and show wrong box
                hide("correct");
                show("wrong");
                //hide wrong box after 1 sec
                setTimeout(() => {
                    hide("wrong");
                }, 1000);
            }
        } 
    }
}
             
// if we click on answer box
   //if we are playing
       //correct?
        //yes -> increase score
                //show correct box for 1sec
                //generate new Q&A

        //no -> show try again box for 1sec



//Functions

//Start countdown timer
function startCountdown() {
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("time-remaining-value").innerHTML = timeRemaining;
        if(timeRemaining == 0) {// game over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = 
            "<p>Game Over!</p><p>Your score is " + score + ".</p>";
            hide("time-remaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("start-reset").innerHTML = "Start Game";
        }
    }, 1000);
}

//Start countdown timer
function stopCountdown() {
    clearInterval(action);
}

//Hide an element
function hide(id) {
    document.getElementById(id).style.display = "none";
}

//Show an element
function show(id) {
    document.getElementById(id).style.display = "block";
}

//generate Q & A
function generateQA() {
    let x = Math.round(Math.random()*9) + 1;
    let y = Math.round(Math.random()*9) + 1;
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    let correctPosition = Math.round(Math.random()*3) + 1;
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; // fill one random box with correct answer;
    //fill other boxes with different wrong answer
    let answers = [correctAnswer];
    for (let i = 1; i <= 4; i++) {
        if (i != correctPosition) {
            let wrongAnswer = (Math.round(Math.random()*9) + 1) * (Math.round(Math.random()*9) + 1);
            while (answers.includes(wrongAnswer)) {
                wrongAnswer = (Math.round(Math.random()*9) + 1) * (Math.round(Math.random()*9) + 1);
            }
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}