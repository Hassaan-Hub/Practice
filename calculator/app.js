var min = 0;
var sec = 0;
var mSec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var mSecHeading = document.getElementById("mSec");
var interval = null;

function timer(){
    mSec++;
    if(mSec >= 150){
        sec++;
        mSec = 0;
    }if(sec >= 60){
        min++;
        sec = 0;
    }
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    mSecHeading.innerHTML = mSec;
}


function start(){
    if(interval === null){
        interval = setInterval(timer, 1);
    }
}

function stop(){
    clearInterval(interval)
    interval = null
}

function reset(){
    min = 0;
    sec = 0;
    mSec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    mSecHeading.innerHTML = mSec;
    stop();
}
