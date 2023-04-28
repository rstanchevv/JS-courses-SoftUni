function timeToWalk(stepsCount, footprintMetres, studentSpeed){
    let distance = stepsCount * footprintMetres;
    let restTimeSec = (Math.floor(distance / 500)) * 60;
    let speedMetersPerSec = (studentSpeed * 1000) / (60 * 60);
    let time = distance / speedMetersPerSec + restTimeSec ;
 
    let seconds = Math.round((time%60));
    time -= time%60;
    time = time / 60;
    let min = Math.floor((time % 60));
    time -= time%60;
    time = time / 60;
    let hr = Math.floor((time % 60));
    if(hr<10){        
        hr = '0' + hr;
    } 
    if(seconds<10){        
        seconds = '0' + seconds;
    } 
    if(min<10){        
        min = '0' + min;
    } 
 
    console.log(`${hr}:${min}:${seconds}`);    
}