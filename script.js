const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");

let inplay = false;

const myArray = ['javascript', 'website', 'html', 'document', 'course'];

button.addEventListener("click", function() {
    if (!inplay) {
        inplay = true;
        button.innerHTML = "Guess";
        guess.classList.toggle("hidden");
    }
})