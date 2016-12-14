$(document).ready(function(){
    
    
    
    var bodycolorisgreen = 1;
    $("#colorhead").click(function(){
        bodycolorisgreen++;
        if(bodycolorisgreen % 2 == 1){
            $(".container").css("color", "white");
            $("#colorhead").css("color", "white");
        }else{
            $(".container").css("color", "#d9fcea");
            $("#colorhead").css("color", "#d9fcea");
        
        }
    });
    
    
    
    
    
    //Scanns for Keypresses on the website
 
        
        
    
    var emoji = 0;
    var headertextcolor = false;
    $(document).keypress(function(e){
        //If Spacebar Pressed
       if(e.keyCode == 32){
           headertextcolor = true;
           if(headertextcolor == true){
               $("#colorhead").css("color", "#fcd9fa");
               
           }
           
           
           
           
           
           
        //If e Key pressed
       }else if(e.keyCode == 101){
           if(emoji >= 5){
               //Basically Do nothing
              console.log("Rainbow Emoji is 5 or over");
           }else{
               $("#rainbowEmoji").append("🌈 ");
               emoji++;
           }
           
           
        //If g key pressed
       }else if (e.keyCode == 103){
            $(".rowLast").html("<img src = 'https://media.giphy.com/media/14g4L6kXIdGHU4/giphy.gif' class='col-lg-12'>");
       }
        
        
    }); 
    
    
    
});