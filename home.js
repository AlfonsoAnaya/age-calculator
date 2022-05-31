const input = document.getElementById("dob")
const container = document.querySelector("div")
const dobLabel = document.getElementById("dob-label")
const btnStart = document.getElementById("btn-go")
const btnReset = document.getElementById("btn-reset")
const QBD = new Date(1926, 03, 21)
const GBD = new Date(2003, 00, 03)
var today = new Date()
const QOld = Math.floor((today - QBD)/1000/60/60/24)
const GOld = Math.floor((today - GBD)/1000/60/60/24)

btnStart.addEventListener("click", () => {
    /* Ask to pick a valid date 
    if the form hasn't been filled 
    otherwise, carry on*/
    if (input.value === "") {
        alert('Select a date of birth')
    } else {
        /* Getting age in days from the input */
        inputDate = new Date(input.value)
        var diff = Math.floor((today - inputDate)/1000/60/60/24)
        
         /* Creating a new paragraph with an id
        in which to append the text to be generated below*/
        const newP = document.createElement("p")
        newP.setAttribute("id", "new-p")
        
        /* Generate text stating:
        1. your age in days, and
        2. how you compare to either Queen Elizabeth or Greta Thunberg
        How?
            1. Generate random number (0 or 1, kindf of like a random boolean really)
            Then using that random boolean in an if statement
            to determine who you're being compared to (0 for Queen, 1 for Greta)
            2. Once this has been established we asigng the corresponding class name
            to the container in order to change the background image to match
            the comparison subjet
            3. Use an if statement to determine if you're (older/younger)
            than (the Queen/Greeta) and generate a text statint that you're
            x days old and that that is y days (younger/older) than
            (the Queen/Greta)
        */
        let randomN = Math.floor(Math.random() * 2)
        if (randomN === 0) {
            container.classList.toggle("background-queen")
            container.classList.toggle("background-normal")
            if (QOld > diff) {
                var text = document.createTextNode(`You are ${diff} days old! 
                That is ${QOld - diff} days younger than Queen Elizabeth`)
            } else {
                var text = document.createTextNode(`You are ${diff} days old! 
                That is ${diff - QOld} days older than Queen Elizabeth`)
            }
        } else if (randomN === 1) {
            container.classList.toggle("background-greta")
            container.classList.toggle("background-normal")
            if (diff > GOld) {
                var text = document.createTextNode(`You are ${diff} days old! 
                That is ${diff - GOld} days older than Greta Thunberg`)
            } else {
                var text = document.createTextNode(`You are ${diff} days old! 
                That is ${GOld - diff} days younger than Greta Thunberg`)
            }
        }

        /* Appeding a new paragraph with the text generated
        in the previous if statement
        hiding the initial form and showing the reset button*/
        newP.appendChild(text)
        container.appendChild(newP)
        btnReset.classList.toggle("hide")
        btnStart.classList.toggle("hide")
        dobLabel.classList.toggle("hide")
        input.classList.toggle("hide")
    }
})

/* Reset button to go back to the initial state*/
btnReset.addEventListener("click", () => {
    let gone = document.getElementById("new-p")
    container.removeChild(gone)
    btnReset.classList.toggle("hide")
    btnStart.classList.toggle("hide")
    dobLabel.classList.toggle("hide")
    input.classList.toggle("hide")
    container.classList.remove("background-queen")
    container.classList.remove("background-greta")
    container.classList.toggle("background-normal")
})