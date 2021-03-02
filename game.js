var gameOrder = [];
var userClickedPattern = [];
var color = ["red","yellow","blue","green"];
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var clickedColor = $(this).attr("id");
    userClickedPattern.push(clickedColor);
    playSound(clickedColor);
    animatePress(clickedColor);
    checkAnswer(userClickedPattern.length-1);
      
});
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNum = Math.floor(Math.random()*4);
    var randomColor = color[randomNum];
    gameOrder.push(randomColor);
    var button = $("#"+randomColor);
    button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}
function playSound(color){   
    var audio= new Audio('sounds/'+color+'.mp3');
    audio.play();
}
function checkAnswer(currentLevel){
if(gameOrder[currentLevel]===userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gameOrder.length){
        setTimeout(function (){
            nextSequence();
        }, 1000);
    }
}
else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over , Press Any Key to Restart");

setTimeout(function (){
    $("body").removeClass("game-over");
},200); 
startOver();
}
}
function startOver(){
    level = 0;
    gameOrder = [];
    started = false;
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function ()  {
        $("#"+currentColor).removeClass("pressed");
    },100);
}