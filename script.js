$(document).ready(function(){
    
var x = 16;
var grid = 0;
var resetcolor = "blue";
var currentcolor = "blue";


var hoverreset = function(y) {
    if (y === "blue") {
    var sq = $(".square");
    currentcolor = "blue";
    sq.css("background-color","#4183d7");
        sq.mouseover(function(){
            $(this).css("background-color","#c5eff7")
        });
    } else if (y === "red") {
    var sq = $(".square");
    currentcolor = "red";
    sq.css("background-color","#d91e18");
        sq.mouseover(function(){
            $(this).css("background-color","#f1a9a0");
        });
    } else if (y === "green") {
    var sq = $(".square");
    currentcolor = "green";
    sq.css("background-color","#26a65b");
        sq.mouseover(function(){
            $(this).css("background-color","#66cc99");
        });
    }
};
    
var makesize = function() {
    if (x < 1 || x > 64 || isNaN(x) == true) {
      alert("value is not a number between 4 and 64");
    } else {
      var width = 650 / x;
      $(".square").css('width',width).css('height',width);
      /*$(".square").css('height',width);*/
        
      multiplyboxes();
      hoverreset(currentcolor);
      
    };
};

// random number:
// "#"+((1<<24)*Math.random()|0).toString(16)
var a = $(".square")

var multiplyboxes = function() {
        grid = x * x - 1;
        for (var i=0; i<grid; i++) {
        a.clone().insertAfter(a);
        };
      };

//buttons:
$("#choosesize").click(function() {
    x = prompt("Choose a grid size");
    makesize();
});
    
$("#resetgrid").click(function(){
    x = 16;
    multiplyboxes();
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

//run functions
makesize();
multiplyboxes();
hoverreset(resetcolor);


}); //doc ready

