let homeScore = 0;
let guestScore = 0;

function addOne() {
    homeScore += 1;
    document.getElementById("homeScore").textContent = homeScore;
}
function addTwo() {
    homeScore += 2;
    document.getElementById("homeScore").textContent = homeScore;
}
function addThree() {
    homeScore += 3;
    document.getElementById("homeScore").textContent = homeScore;
}

function addOneGuest() {
    guestScore += 1;
    document.getElementById("guestScore").textContent = guestScore;
}
function addTwoGuest() {
    guestScore += 2;
    document.getElementById("guestScore").textContent = guestScore;
}
function addThreeGuest() {
    guestScore += 3;
    document.getElementById("guestScore").textContent = guestScore;
}