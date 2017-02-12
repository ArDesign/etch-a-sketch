$(document).ready(function(){
    
var x = 16;
var grid = 0;
var resetcolor = "blue";
var currentcolor = "blue";


var hoverreset = function(y) {
    if (y === "blue") {
    currentcolor = "blue";
    $(".square").css("background-color","#4183d7");
        $(".square").mouseover(function(){
            $(this).css("background-color","#c5eff7")
        });
    } else if (y === "red") {
    currentcolor = "red";
    $(".square").css("background-color","#d91e18");
        $(".square").mouseover(function(){
            $(this).css("background-color","#f1a9a0");
        });
    } else if (y === "green") {
    currentcolor = "green";
    $(".square").css("background-color","#26a65b");
        $(".square").mouseover(function(){
            $(this).css("background-color","#66cc99");
        });
    } else if (y === "random") {
    currentcolor = "random";
    $(".square").css("background-color","#"+((1<<24)*Math.random()|0).toString(16));
        $(".square").mouseover(function(){
            $(this).css("background-color","#"+((1<<24)*Math.random()|0).toString(16));
        });
    }
};
    
var makesize = function() {
    if (x < 1 || x > 64 || isNaN(x) == true) {
      alert("value is not a number between 4 and 64");
    } else {
      var width = 650 / x;
      $(".square").css('width',width).css('height',width);
        
      multiplyboxes();
      hoverreset(currentcolor);
      
    };
};

var a = $(".square")

var multiplyboxes = function() {
    $(".square").not(':first').remove();
        grid = (x * x) - 1;
        for (var i=0; i<grid; i++) {
        a.clone().insertAfter(a);
            console.log(grid);
        };
      };

//buttons:
$("#choosesize").click(function() {
    x = prompt("Choose a grid size between 1 and 64");
    makesize();
});
    
$("#resetgrid").click(function(){
    x = 16;
    hoverreset(resetcolor);
    makesize();
});
    
$("#red").click(function(){
    hoverreset("red");
});
$("#green").click(function(){
    hoverreset("green");
});
$("#blue").click(function(){
    hoverreset("blue");
});
$("#random").click(function(){
    hoverreset("random");
});

//run functions
makesize();
multiplyboxes();
hoverreset(resetcolor);


}); //doc ready

