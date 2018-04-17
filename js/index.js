//DISPLAYS WELCOME ON LOAD
window.onload = function() {
  var ball = document.getElementById('ball')
  ball.style.marginLeft = "665px";
};

//ANIMATES TEXT WHEN BUTTON IS CLICKED
$(document).ready(function(){
    $("button").click(function(){
    $("div").animate({left: '250px'});
       
    });
});
//DISPLAYS MESSAGE WHEN BUTTON IS CLICKED
function welcome() {
    document.getElementById("display").innerHTML = "<br><h1>I said not to click me! Have fun reading the text slightly shifted to the right, loser.</h1>";
}