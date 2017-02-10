$(document).ready(function(){

//multiply divs.
//Use a class as it doesn't cause the same conflicts as IDs.
//also put it in a variable before the loop
var a = $(".square")
    for (var i=0; i<255; i++) {
        a.clone().insertAfter(a);
    };
    
$(".square").hover(function(){
    $(this).css("background-color","#FDE3A7");
});
    
}); //doc ready