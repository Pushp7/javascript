const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    document.querySelector("#under-weight").removeAttribute("style")
    document.querySelector("#normal-range").removeAttribute("style")
    document.querySelector("#over-weight").removeAttribute("style")

    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const results = document.querySelector("#results")

    //validation

    if (height < 40 || isNaN(height) || height === "") {
        results.innerHTML = "Please enter a valid height"
    } else if (weight < 0 || isNaN(weight) || weight === "") {
        results.innerHTML = "Please enter a valid weight"
    } else {
        
        // BMI = ( weight in kg / (height in cm squared) * 10000 )
        const BMI = (weight / (height * height) * 10000).toFixed(2)
        results.innerHTML = BMI

        function styleP(p){
            // p.textContent += " ☑️"
            p.style.fontWeight = "bolder"
            p.style.backgroundColor = "black"
            p.style.color = "white"
            p.style.width = "fit-content"
        }

        if (BMI < 18.6) {
            let p = document.querySelector("#under-weight")
            styleP(p)

        } else if (BMI >= 18.6 && BMI <= 24.9) {
            let p = document.querySelector("#normal-range")
            styleP(p)

        } else if (BMI > 24.9) {
            let p = document.querySelector("#over-weight")
            styleP(p)
        }
    }

})