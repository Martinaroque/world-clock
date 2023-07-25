function updateTimeLisbon(){

let lisbonElement= document.querySelector("#lisbon");
let lisbonDate = lisbonElement.querySelector(".date")
let lisbonTime = lisbonElement.querySelector(".time")
let lisbonTimeElement = moment(); 
lisbonDate.innerHTML= lisbonTimeElement.format("dddd, Do MMMM YYYY");
lisbonTime.innerHTML = `${lisbonTimeElement.format("h:mm:ss [<small>]A[</small>]")} `
}
updateTimeLisbon();
setInterval(updateTimeLisbon,1000)

////
function updateTimeParis(){
let parisElement= document.querySelector("#paris");
let parisDate = parisElement.querySelector(".date")
let parisTime = parisElement.querySelector(".time")
let parisTimeElement = moment().tz("Europe/Paris"); 
parisDate.innerHTML= parisTimeElement.format("dddd, Do MMMM YYYY");
parisTime.innerHTML = `${parisTimeElement.format("h:mm:ss [<small>]A[</small>]")} `
}
updateTimeParis();
setInterval(updateTimeParis,1000)
////

function updateTimeNewYork(){
let newYorkElement= document.querySelector("#new-york");
let newYorkDate = newYorkElement.querySelector(".date")
let newYorkTime = newYorkElement.querySelector(".time")
let newYorkTimeElement = moment().tz("America/New_York"); 
newYorkDate.innerHTML= newYorkTimeElement.format("dddd, Do MMMM YYYY");
newYorkTime.innerHTML = `${newYorkTimeElement.format("h:mm:ss [<small>]A[</small>]")} `
} 
updateTimeNewYork();
setInterval(updateTimeNewYork,1000)
////
function updateTimeSydney(){
let sydneyElement= document.querySelector("#sydney");
let sydneyDate = sydneyElement.querySelector(".date")
let sydneyTime = sydneyElement.querySelector(".time")
let sydneyTimeElement = moment().tz("Australia/Sydney"); 
sydneyDate.innerHTML= sydneyTimeElement.format("dddd, Do MMMM YYYY");
sydneyTime.innerHTML = `${sydneyTimeElement.format("h:mm:ss [<small>]A[</small>]")} `
}
updateTimeSydney();
setInterval(updateTimeSydney,1000)


function updateCity(event){

    let cityTimeZone= event.target.value;
    let cityTime = moment().tz(cityTimeZone)
   let citiesElement = document.querySelector("#cities")
   citiesElement.innerHTML= `<div class="city" id="lisbon">
   <div>
   <h2>${cityTimeZone}</h2>
   <div class="date">${cityTime.format("dddd, Do MMMM YYYY")}</div>
</div>
   <div class="time">${cityTime.format("h:mm:ss:SS [<small>]A[</small>]")}</div>
</div>`
}

let citiesSelect = document.querySelector("#city")
citiesSelect.addEventListener("change",updateCity)