var painted;
var conent;
var winningCombinations;
var turn = 0;
var close = document.getElementsByClassName("closebtn");
var i;

/* Load Winning Combinations */

window.onload = function() {
    painted = new Array();
    content = new Array();

    winningCombinations =
       [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    for (var  i = 0;  i <= 8; i++) {
        painted[i] = false;
        content[i] = '';
    }
}

/* Main Functions */
function reload() {         
    location.reload(true);
}

function canvasClicked(canvasNumber) {        
    var theCanvas = "canvas"+canvasNumber;
    var c = document.getElementById(theCanvas);
    var cxt = c.getContext("2d");
    if (painted[canvasNumber] == false) {
        if(turn % 2 == 0) {
            drawX(cxt, canvasNumber)
        }
        else {
            drawO(cxt, canvasNumber)
        } 
        turn++;
        painted[canvasNumber] = true;
        if(turn == 9) {
            drawNotify();
            paintExplo();
        }
    }
    else {
        SquareUsed();
    }
}

/* Draw Functions */

function drawX(cxt, canvasNumber) {
    cxt.beginPath();
    cxt.moveTo(20,20);
    cxt.lineTo(220,220);
    
    cxt.moveTo(220,20);
    cxt.lineTo(20,220);
    cxt.scale(16,16);

    cxt.shadowColor = 'blue';
    cxt.shadowOffsetX = 10;
    cxt.shadowOffsetY = 15;
    cxt.shadowBlur = 10;
    
    cxt.stroke();
    cxt.closePath();
    content[canvasNumber] = 'X';
    checkForWinners("X");
}

function drawO(cxt, canvasNumber) { 
    cxt.beginPath();
    cxt.arc(126, 126, 110, 25, Math.PI*2, true)
    cxt.scale(16,16);

    cxt.shadowColor = 'red';
    cxt.shadowOffsetX = 10;
    cxt.shadowOffsetY = 15;
    cxt.shadowBlur = 10;
    
    cxt.stroke();
    cxt.closePath(); 
    content[canvasNumber] = 'O'; 
    checkForWinners("O");
}

/* Winner Functions */

function checkForWinners(symbol) {
    console.log("Winning Lenght: ", winningCombinations.length)
    for(var a = 0; a < winningCombinations.length; a++) {
        if( content[winningCombinations[a] [0]] == symbol
            && content[winningCombinations[a] [1]] == symbol
            && content[winningCombinations[a] [2]] == symbol) {
            if(symbol == "X") {
                wonXNotify();
                paintExplo();
            }
            else{
                wonONotify();
                paintExplo();
            }


        }
    }
}

/* Notification */

function wonXNotify() {
    var x = document.getElementById("wonXNotify");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}


function wonONotify() {
    var x = document.getElementById("wonONotify");

    x.className = "show";
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}

function drawNotify() {
    var x = document.getElementById("drawNotify");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}


function FiveTimer() {
    var x = document.getElementById("FiveTimer");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}


function FourTimer() {
    var x = document.getElementById("FourTimer");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}


function ThirdTimer() {
    var x = document.getElementById("ThirdTimer");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}

function TwoTimer() {
    var x = document.getElementById("TwoTimer");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}


function OneTimer() {
    var x = document.getElementById("OneTimer");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}


function SquareUsed() {
    var x = document.getElementById("SquareUsed");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/* Not Paint after win or draw */

function paintExplo() {
    painted[0] = true;
    painted[1] = true;
    painted[2] = true;
    painted[3] = true;
    painted[4] = true;
    painted[5] = true;
    painted[6] = true;
    painted[7] = true;
    painted[8] = true;
    setTimeout(FiveTimer, 1000);
    setTimeout(FourTimer, 2000);
    setTimeout(ThirdTimer, 3000);
    setTimeout(TwoTimer, 4000);
    setTimeout(OneTimer, 5000);
    setTimeout(canvas, 6500);
    setTimeout(reload, 6000);
}

/* Show Canvas when clicked on Button */

function canvas() {
    var canvas0 = document.getElementById("canvas0");
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    var canvas3 = document.getElementById("canvas3");
    var canvas4 = document.getElementById("canvas4");
    var canvas5 = document.getElementById("canvas5");
    var canvas6 = document.getElementById("canvas6");
    var canvas7 = document.getElementById("canvas7");
    var canvas8 = document.getElementById("canvas8");
    
    canvas0.className = "show";
    canvas1.className = "show";
    canvas2.className = "show";
    canvas3.className = "show";
    canvas4.className = "show";
    canvas5.className = "show";
    canvas6.className = "show";
    canvas7.className = "show";
    canvas8.className = "show";
    setTimeout(XhasTheTurn, 2000);
}