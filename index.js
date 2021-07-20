
const total = document.querySelectorAll('.drum').length;

for(let i=0;i<total;i++) {

    document.querySelectorAll('.drum')[i]
    .addEventListener("click", function () {

        let url = 'sounds/tom-' + i + '.mp3'
        let audio = new Audio("sounds/tom-" + (i+1) +".mp3");
        audio.play();

        this.style.color = 'white';

        });

}