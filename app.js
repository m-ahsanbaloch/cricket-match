
var heading = document.getElementById('heading')
var title = {
    text: "ICC",
    image : "assets/images/icc_logo.png"
}
// heading.innerHTML = title[image]
console.log(title.image)
heading.innerHTML = `<img class="logo" src="${title.image}"> <p>${title.text}</p>`
