// mySite jQuery example
var counter = 0;

$(function ()
{
   // after the "#" is the id of the object on which we can click
   $('#clickMeToCalculate').on( 'click', function(){
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

    $('#peekaboo').on( 'click', function(){
     $('#outputText').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    });

   $('#selectCapacity').on( 'change', function(){
      console.log( "selectCapacity: " + $('#selectCapacity').val());
    });

   $('#selectFill').on( 'change', function(){
      console.log( "selectFill: " + $('#selectFill').val());
    });

   $('#textIn').on( 'keyup', function(){
     totalText = $('#textIn').val();
      console.log( "textIn: " + $('#textIn').val());
    });
});
