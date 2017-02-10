$(document).ready(function(){

var hoverreset = function () {
    var sq = $(".square");
    sq.css("background-color","#4183D7");
    sq.hover(function(){
      $(this).css("background-color","#E4F1FE")
    });
};

// random number:
// "#"+((1<<24)*Math.random()|0).toString(16)

var multiplyboxes = function() {
        grid = x * x - 1;
        //var a = $(".square")
        for (var i=0; i<grid; i++) {
        a.clone().insertAfter(a);
        };
      };

//initial grid size:
var a = $(".square")
        for (var i=0; i<255; i++) {
        a.clone().insertAfter(a);
        };

var grid = 0;

var width = 650 / 16;
$(".square").css("width", width);
$(".square").css("height", width);

hoverreset();

//multiply divs.
//Use a class as it doesn't cause the same conflicts as IDs.
//also put it in a variable before the loop
/*var a = $(".square")
    for (var i=0; i<255; i++) {
        a.clone().insertAfter(a);
    };
    */
    
/*
$(".square").hover(function(){
    $(this).css("background-color","#FDE3A7");
});
*/

var x = 0;

$("#resetgrid").click(function() {
    x = prompt("Choose a grid size");
    if (x < 1 || x > 64 || isNaN(x) == true) {
      alert("value is not a number between 4 and 64");
    } else {
      
      var width = 650 / x;
      
      $(".square").css('width',width);
      $(".square").css('height',width);
      
      
      multiplyboxes();
      hoverreset();
      
    };
});

/*grid = x * x;
var a = $(".square")
    for (var i=0; i<grid; i++) {
        a.clone().insertAfter(a);
    };*/

}); //doc ready

