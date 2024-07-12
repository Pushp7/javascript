const button = document.querySelector("#submit")
const guessField = document.querySelector("#guessField")
const guessesRecord = document.querySelector(".guesses")
const remainsRecord = document.querySelector(".remaining")
const messageRecord = document.querySelector("#message")
const newGame = document.querySelector(".newGame")

let playgame = true
let prevGuesses = []
let remainingGuesses = 10
guessesRecord.innerHTML = "....."

//Random number: range between 1 - 100
let randomNumber = Math.floor((Math.random() * 100 + 1))
console.log("Random Number:", randomNumber);

while (playgame) {
    playgame = false
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const guess = parseInt(guessField.value)

        if (remainingGuesses > 0) {
            if (guess < 1 || guess > 100 || isNaN(guess)) {
                messageRecord.innerHTML = "Invalid guess! enter again..."
                guessField.focus()
            }
            else {
                prevGuesses.push(guess)
                remainingGuesses -= 1
                guessesRecord.innerHTML = prevGuesses
                remainsRecord.innerHTML = remainingGuesses
                guessField.value = ''

                console.log("Input Value: ", guess);
                if (guess == randomNumber) {
                    guessField.value = guess
                    messageRecord.innerHTML = "Congratulations!🎉🥳 You guessed the number."
                    newGame.innerHTML = "Play Again?"
                    guessField.disabled = true
                    button.disabled = true
                }
                else if (guess < randomNumber) {
                    messageRecord.innerHTML = "Your guess is too low"
                    guessField.focus()
                }
                else {
                    messageRecord.innerHTML = "Your guess is too high"
                    guessField.focus()
                }
            }
        }
        else {
            guessField.disabled = true
            button.disabled = true
            // playgame = false
            messageRecord.innerHTML = `You've run out of guesses. The number was: ${randomNumber}`
            newGame.innerHTML = "START NEW GAME"
        }



        newGame.addEventListener("click", function () {
            randomNumber = Math.floor((Math.random() * 100 + 1))
            console.log("Random Number:", randomNumber);
            guessField.value = ''
            guessField.disabled = false
            button.disabled = false
            prevGuesses = []
            remainingGuesses = 10
            playgame = true

            guessesRecord.innerHTML = prevGuesses
            remainsRecord.innerHTML = remainingGuesses
            messageRecord.innerHTML = ""
            newGame.innerHTML = ""
        })

    })
}