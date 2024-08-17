const date = new Date;
console.log(date)
var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')

var realhour = date.getHours();
var realMin = date.getMinutes();
var realSec = date.getSeconds();

function display(){
    var day = document.querySelector('.date')
    day.innerHTML=`DATe : ${date.getDate()} / ${date.getDay()} / ${date.getFullYear()}`
}


function run() {
    if (realSec < 60) {
        realSec++
        second.innerHTML = realSec
        if (realSec == 60) {
            realSec = 0
            realMin++
            minute.innerHTML = realMin
            if (realMin > 59) {
                realMin = 0;
                realhour++
                hour.innerHTML = realhour;
                if (realmin > 23) {
                    realSec = 0;
                    realMin = 0;
                    realhour = 0

                    hour.innerHTML = realhour;
                    minute.innerHTML = realMin
                    second.innerHTML = realSec
                }
            }
        }

    }

}

hour.innerHTML = realhour;
minute.innerHTML = realMin
second.innerHTML = realSec
display()
// setInterval(run,1000)


