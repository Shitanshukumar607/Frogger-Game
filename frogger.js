// Selecting elements from the DOM
const squares = document.querySelectorAll(".grid div")

const upBtn = document.querySelector(".up")
const downBtn = document.querySelector(".down")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")

const popupEl = document.querySelector(".popup")
const closepopulEl = document.querySelector(".close")

const playagainlosebtn = document.querySelector(".play-again-lose-button")
const losepopupEl = document.querySelector(".lose-popup")
const winpopupEl = document.querySelector(".win-popup")
const playagainwinbtn = document.querySelector(".play-again-win-button")
const wintimeEl = document.querySelector(".win-time")


const carleftEls = document.querySelectorAll(".carleft")
const tractorrightEls = document.querySelectorAll(".tractorright")
const racecarrightEls = document.querySelectorAll(".racecarright")
const lorryleftEls = document.querySelectorAll(".lorryleft")
const logrightEls = document.querySelectorAll(".logright")
const logleftEls = document.querySelectorAll(".logleft")

// Setting up grid properties
const width = 15
let currentIndex = 232

// Event listener for removing popup and starting game
closepopulEl.addEventListener("click", () => {
    popupEl.style.opacity = "0"
    popupEl.style.transform = "scale(0.001)"
    startintervals()
    addeventlistenertobtns()
})

// Function to add event listeners to directional buttons
function addeventlistenertobtns() {
    upBtn.addEventListener("click", up)
    downBtn.addEventListener("click", down)
    leftBtn.addEventListener("click", left)
    rightBtn.addEventListener("click", right)
}

// Move frog upwards
function up() {
    if (currentIndex > width) {
        console.log("up")
        squares.forEach(square => square.classList.remove("frog"))
        currentIndex = currentIndex - width
        squares[currentIndex].classList.add("frog")
    }
}

// Move frog downwards
function down() {
    if (currentIndex + width < 240) {
        console.log("down")
        squares.forEach(square => square.classList.remove("frog"))
        currentIndex = currentIndex + width
        squares[currentIndex].classList.add("frog")
    }
}

// Move frog left
function left() {

    if (currentIndex % width !== 0) {
        console.log("left")
        squares.forEach(square => square.classList.remove("frog"))
        currentIndex = currentIndex - 1
        squares[currentIndex].classList.add("frog")
    }
}

// Move frog right
function right() {
    if (currentIndex % width < 14) {
        console.log("right")
        squares.forEach(square => square.classList.remove("frog"))
        currentIndex = currentIndex + 1
        squares[currentIndex].classList.add("frog")
    }
}

// Remove event listeners from directional buttons
function removeeventlistenertobtns() {
    upBtn.removeEventListener("click", up)
    downBtn.removeEventListener("click", down)
    leftBtn.removeEventListener("click", left)
    rightBtn.removeEventListener("click", right)
}

// Move cars to the left
function carleftmove() {
    carleftEls.forEach(element => {
        if (element.classList.contains("car1")) {
            element.classList.remove("car1")
            element.classList.add("car2")
        } else if (element.classList.contains("car2")) {
            element.classList.remove("car2")
            element.classList.add("car3")
        } else if (element.classList.contains("car3")) {
            element.classList.remove("car3")
            element.classList.add("car1")
        }
    })
}

// Move tractors to the right
function tractorrightmove() {
    tractorrightEls.forEach(element => {
        if (element.classList.contains("tractor1")) {
            element.classList.remove("tractor1")
            element.classList.add("tractor3")
        } else if (element.classList.contains("tractor2")) {
            element.classList.remove("tractor2")
            element.classList.add("tractor1")
        } else if (element.classList.contains("tractor3")) {
            element.classList.remove("tractor3")
            element.classList.add("tractor2")
        }
    })
}

// Move lorry to the left
function lorryleftmove() {
    lorryleftEls.forEach(element => {
        if (element.classList.contains("lorry1")) {
            element.classList.remove("lorry1")
            element.classList.add("lorry2")
        } else if (element.classList.contains("lorry2")) {
            element.classList.remove("lorry2")
            element.classList.add("lorry3")
        } else if (element.classList.contains("lorry3")) {
            element.classList.remove("lorry3")
            element.classList.add("lorry4")
        } else if (element.classList.contains("lorry4")) {
            element.classList.remove("lorry4")
            element.classList.add("lorry1")
        }
    })
}

// Move racecars/tractor to the right
function racecarrightmove() {
    racecarrightEls.forEach(element => {
        if (element.classList.contains("racecar1")) {
            element.classList.remove("racecar1")
            element.classList.add("racecar4")
        } else if (element.classList.contains("tractorracecar")) {
            element.classList.remove("tractorracecar")
            element.classList.add("racecar1")
        } else if (element.classList.contains("racecar3")) {
            element.classList.remove("racecar3")
            element.classList.add("tractorracecar")
        } else if (element.classList.contains("racecar4")) {
            element.classList.remove("racecar4")
            element.classList.add("racecar3")
        }
    })
}

// Move logs to the right
function logrightmove() {
    logrightEls.forEach(element => {
        if (element.classList.contains("log1")) {
            element.classList.remove("log1")
            element.classList.add("log5")
        } else if (element.classList.contains("log2")) {
            element.classList.remove("log2")
            element.classList.add("log1")
        } else if (element.classList.contains("log3")) {
            element.classList.remove("log3")
            element.classList.add("log2")
        } else if (element.classList.contains("log4")) {
            element.classList.remove("log4")
            element.classList.add("log3")
        } else if (element.classList.contains("log5")) {
            element.classList.remove("log5")
            element.classList.add("log4")
        }
    })
}

// Move logs to the left
function logleftmove() {
    logleftEls.forEach(element => {
        if (element.classList.contains("log1")) {
            element.classList.remove("log1")
            element.classList.add("log2")
        } else if (element.classList.contains("log2")) {
            element.classList.remove("log2")
            element.classList.add("log3")
        } else if (element.classList.contains("log3")) {
            element.classList.remove("log3")
            element.classList.add("log4")
        } else if (element.classList.contains("log4")) {
            element.classList.remove("log4")
            element.classList.add("log5")
        } else if (element.classList.contains("log5")) {
            element.classList.remove("log4")
            element.classList.add("log1")
        }
    })
}

// Check if the frog reached the goal or encountered an obstacle
function checkoutcome() {
    if (currentIndex == 7) {
        clearintervals()
        removeeventlistenertobtns()
        win()
    }
    if (squares[currentIndex].classList.contains("log1") || squares[currentIndex].classList.contains("log2") || squares[currentIndex].classList.contains("log3") || squares[currentIndex].classList.contains("lorry1") || squares[currentIndex].classList.contains("lorry2") || squares[currentIndex].classList.contains("tractor1") || squares[currentIndex].classList.contains("car1") || squares[currentIndex].classList.contains("racecar1") || squares[currentIndex].classList.contains("tractorracecar")) {

        lose()

    }
}

// Handle win scenario
function win() {

    if (hours > 0) {
        wintimeEl.textContent = `${formattedHours}hours  ${formattedMinutes}minutes  ${formattedSeconds}seconds`;
    }
    else if (minutes > 0) {
        wintimeEl.textContent = `${formattedMinutes}minutes  ${formattedSeconds}seconds`;
    } else {
        wintimeEl.textContent = `${formattedSeconds}seconds`
    }

    console.log("time is", time)
    console.log("besttime is", besttime)
    if (time < besttime) {
        besttime = time
        localStorage.setItem("key", JSON.stringify(besttime));
        console.log("best time is ", besttime)
    }
    besttimeEl.textContent = besttime

    clearintervals()
    removeeventlistenertobtns()
    currentIndex = 232
    squares.forEach(value => {
        value.classList.remove("frog")
    })
    squares[currentIndex].classList.add("frog")

    winpopupEl.style.transform = "translate(-50%, -50%) scale(1)"
    winpopupEl.style.opacity = "1"
    console.log("win")
    playagainwinbtn.addEventListener("click", winstart)
}

// Reset game state after winning 
function winstart() {
    timerrestart()
    currentIndex = 232
    squares.forEach(value => {
        value.classList.remove("frog")
    })
    squares[currentIndex].classList.add("frog")

    winpopupEl.style.opacity = "0"
    winpopupEl.style.transform = "translate(-50%, -50%) scale(0.001)"
    startintervals()
    addeventlistenertobtns()
}

// Handle lose scenario
function lose() {
    clearintervals()
    removeeventlistenertobtns()
    console.log("hi")
    losepopupEl.style.opacity = "1"
    losepopupEl.style.transform = "scale(1)"
    playagainlosebtn.addEventListener("click", losestart)
}

// Reset game state after losing
function losestart() {
    timerrestart()
    currentIndex = 232
    squares.forEach(value => {
        value.classList.remove("frog")
    })

    squares[currentIndex].classList.add("frog")
    losepopupEl.style.opacity = "0"
    losepopupEl.style.transform = "scale(0.001)"
    startintervals()
    addeventlistenertobtns()
}

// Clear all intervals
function clearintervals() {
    clearInterval(carLeftInterval);
    clearInterval(tractorRightInterval);
    clearInterval(raceCarRightInterval);
    clearInterval(lorryLeftInterval);
    clearInterval(logRightInterval);
    clearInterval(logLeftInterval);
    clearInterval(outcomeCheckInterval);
    clearInterval(stopwatchInterval);
}

// Initialize intervals for vehicle movements and outcome checking
let carLeftInterval, tractorRightInterval, raceCarRightInterval, lorryLeftInterval, logRightInterval, logLeftInterval, outcomeCheckInterval, stopwatchInterval;

// Start all intervals
function startintervals() {
    carLeftInterval = setInterval(carleftmove, 500)
    tractorRightInterval = setInterval(tractorrightmove, 500)
    raceCarRightInterval = setInterval(racecarrightmove, 500)
    lorryLeftInterval = setInterval(lorryleftmove, 500)
    logRightInterval = setInterval(logrightmove, 500)
    logLeftInterval = setInterval(logleftmove, 500)
    outcomeCheckInterval = setInterval(checkoutcome, 5)
    stopwatchInterval = setInterval(stopwatch, 1000);
}

// Select stopwatch element
const stopwatchEl = document.querySelector(".stopwatch")

// Initialize timer variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let formattedSeconds;
let formattedMinutes;
let formattedHours;

let time = 0;
let besttime = 0
const besttimeEl = document.querySelector(".besttime")

// Retrieve best time from local storage or initialize
besttime = JSON.parse(localStorage.getItem("key"))
if (besttime == null) {
    besttime = 0
    console.log("besttime null")
}
besttimeEl.textContent = besttime
console.log("besttime is", besttime)

// Update stopwatch and timer values
function stopwatch() {
    time++
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }


    if (seconds < 10) {
        formattedSeconds = `
    0${ seconds }
    `;
    } else {
        formattedSeconds = seconds;
    }


    if (minutes < 10) {
        formattedMinutes = `
    0${ minutes }
    `;
    } else {
        formattedMinutes = minutes;
    }


    if (hours < 10) {
        formattedHours = `
    0${ hours }
    `;
    } else {
        formattedHours = hours;
    }

    stopwatchEl.textContent = `Time: ${ formattedHours}: ${ formattedMinutes }: ${ formattedSeconds }`
}

// Reset timer values
function timerrestart() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    formattedSeconds;
    formattedMinutes;
    formattedHours;
    time = 0;
}
