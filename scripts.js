// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function() {
    console.log('window loaded');

    const takeOff = document.getElementById('takeoff');

    takeOff.addEventListener('click', takeOffButton);

    landing.addEventListener('click', landButton);

    missionAbort.addEventListener('click', abortMission);

    up.addEventListener('click', upButton);
}

function takeOffButton() {
    const flightStatus = document.getElementById("flightStatus");

    const shuttleBackground = document.getElementById("shuttleBackground");

    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    const launchCheck = window.confirm("Confirm that the shuttle is ready for take off.");


    if(launchCheck) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = 'blue';
        let prevHeight = parseInt(spaceShuttleHeight.innerHTML)
        spaceShuttleHeight.innerHTML = (prevHeight + 10000) 
    }
    
}

function landButton() {
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeight.innerHTML = 0;
}

function abortMission() {
    const abortCheck = window.confirm("Confirm that you want to abort the mission.");

    if(abortCheck) {
        flightStatus = "Mission aborted.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
    }
}

function upButton() {
    const rocketPosition = parseInt(document.getElementById("rocket"));
    rocketPosition.style.top += 10;
    spaceShuttleHeight.innerHTML = (prevHeight + 10000);
}





