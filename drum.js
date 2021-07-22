
const drum = document.querySelectorAll('.drum');
const total = drum.length;

//For Mouse Click 

for(let i=0;i<total;i++) {

    drum[i].addEventListener("click", function () {

        button = this;
        makeAnimation(button.innerText);
        makeSound(button.innerText);

        });
}

// For keypress

document.addEventListener('keypress', function (event) {

    makeAnimation(event.key);
    makeSound(event.key);

})

// animation function

function makeAnimation(key) {

    var activeButton = document.querySelector('.' + key);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 300)

}

//makeSound Function

function makeSound(key) {
    switch (key) {
        case 'w' :
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a' :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's' :
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd' :
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j' :
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'k' :
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l' :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default :
            console.log('invalid key');
            break;
        }
}