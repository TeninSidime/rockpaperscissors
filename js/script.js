// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice="";
var computerChoice="";
var winner="";
var randomNumber=0;
 
$(document).ready(function(){
    $("#shoot").click(function(){
        userChoice= $("#input").val();
        $("#userChoice").text(userChoice)
        console.log(userChoice);
        
        
        //var randomNumber=Math.random();
        
    });
});




