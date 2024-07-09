
//for mouse click......>

var noofdrumbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<noofdrumbutton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var letter=this.innerHTML;  //"this" will give the element clicked then we will go through the inner html to get the letter of the element
       makesound(letter);
       animation(letter);
    }
    );
    
}


// for keyboard press.....>


document.addEventListener("keydown",function(Event){
    var btn= Event.key;       //Event.key gives the letter which is pressed in key board
    makesound(btn);
    animation(btn);
})







function makesound(press){
switch (press){
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
    case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
   
    default:
        console.log(letter);
        break;
}
}

function animation(lett){
    document.querySelector("."+lett).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+lett).classList.remove("pressed");
        
    }, 100);

}
