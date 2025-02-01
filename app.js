
var heading = document.getElementById('heading')
var inLeft = document.getElementsByClassName("inLeft")
var inRight = document.getElementsByClassName('inRight')
var title = {
    text: "ICC",
    image : "assets/images/icc_logo.png"
}
// heading.innerHTML = title[image]
console.log(title.image)
heading.innerHTML = `<img class="logo" src="${title.image}"> <p>${title.text}</p>`
var matches = {
    match1 : {
        team1 : {
            name : "Australia",
            australia : "654/6d",
            image : "assets/images/austrailia.webp"
        },
        team2 : {
            name : "Sri Lanka",
            sriLanka : "165 & 247 (f/o)",
            image : "assets/images/srilanka.png"
        },
        season : "Test 1 of 2 (AUS leads 1-0) - Day 4- Season 2",
        date : "Jan 29-Feb-1",
        status : "AUS won by an innings and 242 runs"
    },
   

}
// assets/images/austrailia.webp
console.log(inLeft)
console.log(matches.match1.status)
inLeft[0].innerHTML = `<p class="status">${matches.match1.season}</p>
<div class="names"><img class="countryImg" src="${matches.match1.team1.image}"><p>${matches.match1.team1.name} </p> </div>
<div class="names"><img class="countryImg" src="${matches.match1.team2.image}"><p>${matches.match1.team2.name} </p> </div>
<div class="status"><p>${matches.match1.status}</p></div>`;
console.log(inRight[0])
inRight[0].innerHTML = `<p class="status">${matches.match1.date}</p>
<p class="rightP">${matches.match1.team1.australia} </p>
<p class="rightP">${matches.match1.team2.sriLanka} </p>`
// inLeft[1].innerHTML += `<p class="status">${matches.match1.season}</p>
// <div class="names"><img class="countryImg" src="${matches.match1.team1.image}"><p>${matches.match1.team1.name} </p> </div>
// <div class="names"><img class="countryImg" src="${matches.match1.team2.image}"><p>${matches.match1.team2.name} </p> </div>
// <div class="status"><p>${matches.match1.status}</p></div>`;

// console.log(matches["match1"]["team1"])