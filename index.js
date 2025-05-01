var noOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handlerClick)
}

function handlerClick() {
    // Extract the class name that contains the key (w, a, s, d, j, k)
    var buttonKey = this.classList[0]; // Get the first class which should be the key
    
    makeSound(buttonKey);
    buttonAnimation(buttonKey);
}

document.addEventListener("keydown", function (events){
    makeSound(events.key);
    buttonAnimation(events.key);
})

function makeSound(key) {
    switch (key){
        case "w":
            var tom1 = new Audio("./sounds/Sheyma.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("./sounds/Eren.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("./sounds/Shengool.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("./sounds/Vahap.mp3");
            tom4.play();
        break;

        case "j":
            var crash = new Audio("./sounds/Berrak.mp3");
            crash.play();
        break;

        case "k":
            var kick = new Audio("./sounds/Denizalp.mp3");
            kick.play();
        break;

        case "l":
            var kick = new Audio("./sounds/Mete.mp3");
            kick.play();
        break;

        default: console.log("Key pressed: " + key);
    }
}

function buttonAnimation(currentBtn){
    var activeButton = document.querySelector("."+currentBtn);
    
    // Only proceed if we found a matching button
    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

const year = new Date().getFullYear();
document.getElementById("copyright").textContent = `Copyright © ${year} HILYS L&CC`;