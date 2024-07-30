let display = document.querySelector("input[type=text]")
let buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.innerText === "C") {
            display.value = ""  // clears all the values from the display
        }

        else if (e.target.innerText === "DE") {
            display.value = display.value.slice(0, -1)  // deletes one value at a time from the display from the last index
        }

        else if (e.target.innerText === ".") {
            const delimiters = /[\+\-\*\/]/;
            const values = display.value.split(delimiters);
            if(values.at(-1).includes(".")){
                display.value = display.value
            }
            else{
                display.value += e.target.innerText
            }
        }

        else if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/" || e.target.innerText === "%") {
            if (display.value === "" && e.target.innerText != "-") {
                display.value = ""
            }
            else if (display.value === "-" && e.target.innerText != "-") {
                display.value = ""
            }
            else if (display.value.charAt(display.value.length - 1) === "+" || display.value.charAt(display.value.length - 1) === "-" || display.value.charAt(display.value.length - 1) === "*" || display.value.charAt(display.value.length - 1) === "/" || display.value.charAt(display.value.length - 1) === "%") {
                display.value = display.value.replace(display.value.charAt(display.value.length - 1), e.target.innerText)
            }
            else {
                display.value += e.target.innerText
            }
        }

        else if(e.target.innerText === "0" || e.target.innerText === "00"){
            if(display.value === "0" || display.value === "" ){
                display.value = 0
            }
            else{
                display.value += e.target.innerText
            }
        }

        else if (e.target.innerText === "=") {
            if (display.value.includes("%")) {
                display.value = display.value.replace("%", "/100")
            }    
            display.value = eval(display.value)
            // display.focus()
        }

        else {
            display.value += e.target.innerText
        }
    })
})