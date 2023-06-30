// grab the buttons 
let onePoint = document.querySelector(".btn-1")

// grabe the score
let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

// create counter variable
let homeCounter = 0
let guestCounter = 0

//wire up the functions for home buttons 
function addOneHome() {
    homeCounter += 1
    home.innerText = homeCounter;
}
function addTwoHome() {
    homeCounter += 2
    home.innerText = homeCounter;
}
function addThreeHome() {
    homeCounter += 3
    home.innerText = homeCounter;
}

//wire up the functions for guest buttons 
function addOneGuest() {
    guestCounter += 1
    guest.innerText = guestCounter;

}
function addTwoGuest() {
    guestCounter += 2
    guest.innerText = guestCounter;
}
function addThreeGuest() {
    guestCounter += 3
    guest.innerText = guestCounter;

}
