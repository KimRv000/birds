//---------counter----------//

let counter = 0;

const counterContainer = document.getElementById("counter");
counterContainer.innerHTML = counter;

//---------birds------------//

const bird_1 = document.getElementById("bird-1");
const bird_2 = document.getElementById("bird-2");
const bird_3 = document.getElementById("bird-3");
const bird_4 = document.getElementById("bird-4");
const bird_5 = document.getElementById("bird-5");
const bird_6 = document.getElementById("bird-6");
const bird_7 = document.getElementById("bird-7");

bird_1.addEventListener("click", () => {
    counter++
    counterContainer.innerHTML = counter;

})
bird_2.addEventListener("click", () => {
    counter++
    counterContainer.innerHTML = counter;

})
bird_3.addEventListener("click", () => {
    counter++
    counterContainer.innerHTML = counter;

})
bird_4.addEventListener("click", () => {
    counter+=2
    counterContainer.innerHTML = counter;

})
bird_5.addEventListener("click", () => {
    counter+=2
    counterContainer.innerHTML = counter;

})
bird_6.addEventListener("click", () => {
    counter+=3
    counterContainer.innerHTML = counter;

})
bird_7.addEventListener("click", () => {
    counter+=3
    counterContainer.innerHTML = counter;

})

//------------reset button-------------//

const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", () => {
    window.location.reload();
})

//--------------------timer-----------------------//

let timer;

function runClock() {
    let sec = 30;
    timer = setInterval(() => {
        timerContainer.innerHTML = "00:" + sec;
        sec -= 1;
        if (timer <= 0) {
            stopTimer()
        }
    }, 1000)
}

function stopClock() {
    clearInterval(timer);
}

let clockTimer; 

function runTimer() {
    stopClock();

    birdsContainer.style.visibility = "hidden";
    startWindow.style.visibility = "visible";
    resetButton.style.visibility = "hidden";
    scoreContainer.style.visibility = "hidden";
    timerContainer.style.visibility = "hidden";
    textContainer.innerText = "Time's over!";
    textContainer_2.innerText="Your score is : " + counter + " points";
    textContainer_2.style.color = "#DD6D54";
    startBtn.innerText = "Re-Start game";
}

function stopTimer() {
    clearTimeout(clockTimer);
}
//------------------------start button-------------//

const startBtn = document.getElementById("start-button");

startBtn.addEventListener("click", () => {
    birdsContainer.style.visibility = "visible";
    startWindow.style.visibility = "hidden";
    resetButton.style.visibility = "visible";
    scoreContainer.style.visibility = "visible";
    timerContainer.style.visibility = "visible";
    pointBirds.style.visibility = "hidden";

    runClock()
    clockTimer = window.setTimeout(runTimer, 31000);
});

//--------------------hidden containers------------------//

const birdsContainer = document.getElementById("birds-container");
const startWindow = document.getElementById("start-window");
const scoreContainer = document.getElementById("score-container");
const timerContainer = document.getElementById("timer-container");
const pointBirds = document.getElementById("point-birds");



//--------------text containers---------------//

const textContainer=document.getElementById("text-container");
const textContainer_2=document.getElementById("text-container-2");

