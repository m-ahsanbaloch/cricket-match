
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
        status : "AUS won by an innings and 242 runs",
        play : "assets/images/team1.jpg"
    },
    match2 : {
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
        status : "AUS won by an innings and 242 runs",
        play : "assets/images/team1.jpg"
    },
    match3 : {
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
        status : "AUS won by an innings and 242 runs",
        play : "assets/images/team1.jpg"
    },
    match4 : {
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
        status : "AUS won by an innings and 242 runs",
        play : "assets/images/team1.jpg"
    },
    match5 : {
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
        status : "AUS won by an innings and 242 runs",
        play : "assets/images/team1.jpg"
    },
    match6 : {
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
        status : "AUS won by an innings and 242 runs",
        play : "assets/images/team1.jpg"
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
<p class="rightP">${matches.match1.team2.sriLanka} </p>
<img src="${matches.match1.play}">`

// ======MAtch 2============
inLeft[1].innerHTML = `<p class="status">${matches.match2.season}</p>
<div class="names"><img class="countryImg" src="${matches.match2.team1.image}"><p>${matches.match2.team1.name} </p> </div>
<div class="names"><img class="countryImg" src="${matches.match2.team2.image}"><p>${matches.match2.team2.name} </p> </div>
<div class="status"><p>${matches.match2.status}</p></div>`;
console.log(inRight[1])
inRight[1].innerHTML = `<p class="status">${matches.match2.date}</p>
<p class="rightP">${matches.match2.team1.australia} </p>
<p class="rightP">${matches.match2.team2.sriLanka} </p>
<img src="${matches.match2.play}">`
// ======MAtch 2============
// ======MAtch 3============
inLeft[2].innerHTML = `<p class="status">${matches.match3.season}</p>
<div class="names"><img class="countryImg" src="${matches.match3.team1.image}"><p>${matches.match3.team1.name} </p> </div>
<div class="names"><img class="countryImg" src="${matches.match3.team2.image}"><p>${matches.match3.team2.name} </p> </div>
<div class="status"><p>${matches.match3.status}</p></div>`;
console.log(inRight[2])
inRight[2].innerHTML = `<p class="status">${matches.match3.date}</p>
<p class="rightP">${matches.match3.team1.australia} </p>
<p class="rightP">${matches.match3.team2.sriLanka} </p>
<img src="${matches.match3.play}">`
// ======MAtch 3============

// ======MAtch 2============
inLeft[3].innerHTML = `<p class="status">${matches.match4.season}</p>
<div class="names"><img class="countryImg" src="${matches.match4.team1.image}"><p>${matches.match4.team1.name} </p> </div>
<div class="names"><img class="countryImg" src="${matches.match4.team2.image}"><p>${matches.match4.team2.name} </p> </div>
<div class="status"><p>${matches.match4.status}</p></div>`;
console.log(inRight[3])
inRight[3].innerHTML = `<p class="status">${matches.match4.date}</p>
<p class="rightP">${matches.match4.team1.australia} </p>
<p class="rightP">${matches.match4.team2.sriLanka} </p>
<img src="${matches.match4.play}">`
// ======MAtch 2============
// ======MAtch 2============
inLeft[4].innerHTML = `<p class="status">${matches.match5.season}</p>
<div class="names"><img class="countryImg" src="${matches.match5.team1.image}"><p>${matches.match5.team1.name} </p> </div>
<div class="names"><img class="countryImg" src="${matches.match5.team2.image}"><p>${matches.match5.team2.name} </p> </div>
<div class="status"><p>${matches.match5.status}</p></div>`;
console.log(inRight[4])
inRight[4].innerHTML = `<p class="status">${matches.match5.date}</p>
<p class="rightP">${matches.match5.team1.australia} </p>
<p class="rightP">${matches.match5.team2.sriLanka} </p>
<img src="${matches.match5.play}">`
// ======MAtch 2============
// ======MAtch 2============
inLeft[5].innerHTML = `<p class="status">${matches.match6.season}</p>
<div class="names"><img class="countryImg" src="${matches.match6.team1.image}"><p>${matches.match6.team1.name} </p> </div>
<div class="names"><img class="countryImg" src="${matches.match6.team2.image}"><p>${matches.match6.team2.name} </p> </div>
<div class="status"><p>${matches.match6.status}</p></div>`;
console.log(inRight[5])
inRight[5].innerHTML = `<p class="status">${matches.match6.date}</p>
<p class="rightP">${matches.match6.team1.australia} </p>
<p class="rightP">${matches.match6.team2.sriLanka} </p>
<img src="${matches.match6.play}">`
// ======MAtch 2============