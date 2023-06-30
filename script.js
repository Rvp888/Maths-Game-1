
let playing = false;
let score;
let action;
let timeRemaining;

// if we click on the start/reset button
document.getElementById("start-reset").onclick = function() {
    //if we are playing
    if(playing == true) {
        location.reload(); // reload page
    } else {// if we are not playing
        //change mode to playing
        playing = true
        //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        //show count-down box
        document.getElementById("time-remaining").style.display = "block";
        timeRemaining = 60;
        document.getElementById("time-remaining-value").innerHTML = timeRemaining;
        //change button to reset
        document.getElementById("start-reset").innerHTML = "Reset Game";

        //start countdown
        startCountdown();
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


// if we click on answer box
   //if we are playing
       //correct?
        //yes -> increase score
                //show correct box for 1sec
                //generate new Q&A

        //no -> show try again box for 1sec


function startCountdown() {
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("time-remaining-value").innerHTML = timeRemaining;
    }, 1000);
}