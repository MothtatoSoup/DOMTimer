
// Make variables yippeee
const clock = document.getElementById("clock");
const start = document.getElementById("startTimer");
const freeze = document.getElementById("stopTimer");
const reset = document.getElementById("resetTimer");

clock.innerHTML = 0
let stop = false
let sec = 0

function addSec(){
    sec++
    clock.innerHTML = sec
}
let count = 0
start.addEventListener("click", startTime)
function startTime() {
    count = setInterval(addSec,1000)
    console.log(count)
}

freeze.addEventListener("click",freezeTime)
function freezeTime() {
    clearInterval(count) // Fix <---

}

reset.addEventListener("click", noTime)
function noTime() {
    clearInterval(count) // fix <--
    sec = 0
    clock.innerHTML = 0
}


// console.log(clock)
// hours.innerHTML = "hours: " + hr
// mins.innerHTML = "minutes: " + min


// function addMin(){
//     min += 1
// }

// //start.addEventListener("click", function(){
//     stop = false
//     while(stop != true){
//         setTimeout(addMin(),60000)
//         if(sec == 60){
//             min += 1;
//             sec = 0;
//         }if(min == 60){
//             hr += 1
//             min = 0
//         }
        
//     }
// })

// freeze.addEventListener("click", function(){
//     stop = true
// })


// event.preventDefault