// mySite jQuery example
var counter = 0;

$(function ()
{
   // after the "#" is the id of the object on which we can click
   $('#clickMeToCalculate').click(function(){
      if( $('#textIn').val() == '' ){
        $('#textIn').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      }
      else{
        console.log("totalText: " + totalText );
        // calculate true outputText
        var amountFull = $('#selectFill').val() * $('#selectCapacity').val();
        console.log( "amountFull: " + amountFull );
        // inrement counter and use as record id
        counter++;
        var outputText = "id: " + counter + " - " + $('#textIn').val() + " is " + $('#selectFill').val() + " full of it's " + $('#selectCapacity').val() + " capacity: " + amountFull;
        $('#outputText').append( '<p>' + outputText + '</p>');
      }
    });

    $('#peekaboo').click(function(){
     $('#outputText').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    });

   $('#selectCapacity').change(function(){
      console.log( "selectCapacity: " + $('#selectCapacity').val());
    });

   $('#selectFill').change(function(){
      console.log( "selectFill: " + $('#selectFill').val());
    });

   $('#textIn').keyup(function(){
     totalText = $('#textIn').val();
      console.log( "textIn: " + $('#textIn').val());
    });
});
