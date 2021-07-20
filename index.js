
const wasd = document.querySelector('#wasd');
const drum = wasd.querySelectorAll('.drum');
const total = drum.length;

for(let i=0;i<total;i++) {

    drum[i].addEventListener("click", function () {

        let url = 'sounds/tom-' + i + '.mp3'
        let audio = new Audio("sounds/tom-" + (i+1) +".mp3");
        audio.play();

        let drum = this;
        drum.style.color = 'white';
        setTimeout(function () {
            drum.style.color = '#DA0463';
        }, 350);

        });
}

document.addEventListener('keypress', function (event) {
    makeSound(event.key);
})

function makeSound(key) {
    switch (key) {
        case 'w' :
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case 'a' :
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case 's' :
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case 'd' :
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
        default :
            console.log('invalid key');
            break;
        }
}