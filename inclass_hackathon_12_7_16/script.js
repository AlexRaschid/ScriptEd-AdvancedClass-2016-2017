$(document).ready(function(){
    
    
    
    var bodycolorisgreen = 1;
    $("#colorhead").click(function(){
        bodycolorisgreen++;
            
        if(bodycolorisgreen % 2 == 1){
            $("body").css("color", "white");
            $("#colorhead").css("color", "white");
        }else{
            $("body").css("color", "#d9fcea");
            $("#colorhead").css("color", "#d9fcea");
        
        }
    });
    
    
    var headertextcolor;
    $(window).keypress(function(e){
       if(e.keyCode == 32){
           headertextcolor++;
           if(headertextcolor % 2 == 1){
               $("#colorhead").css("color", "#fcd9fa");
               
           }else{
               $("#colorhead").css("color", "white");
           }
           
       } 
        
        
    });
    
    
    
    
    
    
});