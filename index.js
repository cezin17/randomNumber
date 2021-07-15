const btn = document.querySelector('button')
const input = document.querySelector('input')

btn.onclick = function() {
    max = input.value
    randomNumber(max)
}

input.onchange = function() {
    if(input.value > 9999999 || input.value < 1){
        input.value = 20
        document.getElementById("notify").classList.remove('hidden')
        setTimeout(()=>document.getElementById("notify").classList.add('hidden'), 5000)
    }
}
function randomNumber(max){
    const random = Math.floor(Math.random()*max + 1)
    let time = 1
    for (let index = 1; index <= random; index += Math.floor(random * 0.2)) {
        setTimeout(()=> document.getElementById('result').innerHTML = index, time++ * 50)
    }
    setTimeout(()=> document.getElementById('result').innerHTML = random, time++ * 50)
}


