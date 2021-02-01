var gameOrder = [];
var color = ["red","yellow","blue","green"];
var randomNum = Math.floor(Math.random()*4);
var randomColor = color[randomNum];
gameOrder.push(randomColor);
document.addEventListener("keypress",blinkSquare(randomColor));
//var button=$(".btn");
//console.log("button");
//button.addEventListener("onClick",playSoundBtn(button));


function blinkSquare(color){
    var button = $("."+color);
    switch(color){
        case 'green':
            var audio= new Audio('sounds/green.mp3');
            audio.play();
            break;
    
        case 'blue':
            var audio= new Audio('sounds/blue.mp3');
            audio.play();  
            break;
    
        case 'red':
            var audio= new Audio('sounds/red.mp3');
            audio.play();
            break;
    
        case 'yellow':
            var audio= new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        
        default:
            alert('no sound');        
    }
    button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
/*function playSoundBtn(color){

}*/