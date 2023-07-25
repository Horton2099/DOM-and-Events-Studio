// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function() {
    console.log('window loaded');
    
    let rocketPosX = 0;
    let rocketPosY = 0;
    // ROCKET IMG
    const rocket = document.getElementById('rocket');
    // BUTTONS
    const takeOffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const missionAbortButton = document.getElementById('missionAbort');
    
    // AREAS
    const flightStatusData = document.getElementById("flightStatus");
    const shuttleBackgroundData = document.getElementById("shuttleBackground");
    const spaceShuttleHeightData = document.getElementById("spaceShuttleHeight");

    let altitude = 0;

    function resetRocket() {
        shuttleBackgroundData.style.backgroundColor = 'green';
    altitude = 0;
    spaceShuttleHeightData.innerHTML = altitude;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + 'px';
    rocket.style.marginBottom = rocketPosY + 'px';
    }
 
    takeOffButton.addEventListener('click', function() {
    let launchCheck = window.confirm("Confirm that the shuttle is ready for take off.");
    if(launchCheck) {
        flightStatusData.innerHTML = "Shuttle in flight.";
        shuttleBackgroundData.style.backgroundColor = 'blue';
        altitude = 10000;
        spaceShuttleHeightData.innerHTML = altitude;
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    landingButton.addEventListener('click', landButton);

    function landButton() {
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatusData.innerHTML = "The shuttle has landed.";
    resetRocket();
    }
    
    missionAbortButton.addEventListener('click', abortMission);
    
    function abortMission() {
    const abortCheck = window.confirm("Confirm that you want to abort the mission.");

    if(abortCheck) {
        flightStatusData.innerHTML = "Mission aborted.";
        resetRocket();
        }
    }
    document.addEventListener('click', function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackgroundData).getPropertyValue('width'));
        
        
        if (event.target.id === 'left' && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'right' && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'up' && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeightData.innerHTML = altitude;
        }
        if (event.target.id === 'down' && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeightData.innerHTML = altitude;
        }
    })
}










