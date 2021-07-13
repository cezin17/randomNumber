var btn = document.querySelector('button')
let max = prompt("Enter the maximum number")
function randomNumber(random){
    random = Math.floor(Math.random()*max)
    console.log(random)
}

btn.onclick = function() {
    randomNumber()
}