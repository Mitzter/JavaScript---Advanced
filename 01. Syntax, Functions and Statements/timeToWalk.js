function timeToWalk(steps, footprint, speed){
    let distanceInMeters = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInMeters / speedMetersInSec;
    let rest = Math.floor(distanceInMeters / 500);

    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = (time - (timeInMinutes * 60)).toFixed(0);
    let timeInHours = Math.floor(time / 3600);

    timeInMinutes += rest;
    timeInHours += Math.floor(timeInMinutes / 60);
    timeInMinutes = timeInMinutes % 60;

    let formattedHours = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let formattedMinutes = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
    let formattedSeconds = timeInSeconds < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`;
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);