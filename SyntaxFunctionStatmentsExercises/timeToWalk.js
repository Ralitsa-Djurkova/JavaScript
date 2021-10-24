function input(numberOfSteps, footprint, speed){
     let distance = numberOfSteps * footprint;
     let speedStudent = speed / 3.6;
     let time = distance / speedStudent;
     let rest = Math.floor(distance / 500);

     let timeMin = Math.floor(time/60);
     let timeInSec = Math.round(time - (timeMin * 60));
     let timeInHours = Math.floor(time/3600);


     console.log((timeInHours < 10 ? "0" : "") + timeInHours + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeInSec < 10 ? "0" : "") + timeInSec);
}
input(2564, 0.70, 5.5);