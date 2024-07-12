function randomColorGenerator() {
    const hexChar = "0123456789abcdef"
    let color = "#"
    for (let i = 1; i <= 6; i++) {
        color += hexChar[Math.floor(Math.random() * 16)]
    }
    // console.log(color);
    return color
}

let ref = null
document.getElementById("start").addEventListener("click", function () {
    if(!ref){
        ref = setInterval(function () {
            document.body.style.backgroundColor = randomColorGenerator()
        }, 1000)
    }
})

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(ref)
    ref = null
})