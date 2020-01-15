






$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});


var total = 0
var player = "o"
var is_o = true
var gameOver = false

function performLogic(buttonId, tileId){
   if(!gamOver){
       $(buttonId).hide();
       $(tileId).html(player);
       checkVertical();
       checkHorizontal();
       checkDiagonal();
       changePlayer();
   }
}

function changePlayer(){
    total = total + 1
    if(player == "o"){
        player = "x"
    
    }else{
        player = "o"
    }
}

function checkVertical(){
    win("#tile1", "#tile4", "#tile7")
    win("#tile2", "#tile5", "#tile8")
    win("#tile3", "#tile6", "#tile9")
}

function checkHorizontal(){
    win("#tile1", "#tile2", "#tile3")
}

function checkDiagonal(){

}

function tieGame(){

}

function win(t1, t2, t3){
    if($(t1).html() == player && $(t2).html() == player  &&  $(t3).html() == player ){
        $("h1").text(player + " wins!")
        gameOver = true
    }
}
