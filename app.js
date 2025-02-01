
var heading = document.getElementById('heading')
var title = {
    text: "ICC",
    image : "assets/images/icc_logo.png"
}
// heading.innerHTML = title[image]
console.log(title.image)
heading.innerHTML = `<img class="logo" src="${title.image}"> <p>${title.text}</p>`
var matches = {
    math1 : {
        team1 : {
            name : "Australia",
            australia : "654/6d"
        },
        team2 : {
            name : "Sri Lanka",
            SriLanka : "165 & 247 (f/o)"
        }
    },
    season : "Test 1 of 2 (AUS leads 1-0) - Day 4- Season 2",
    date : "Jan 29-Feb-1",
    status : "AUS won by an innings and 242 runs"

}
