$(document).ready(function(){
    
    function vars(){
        numbers = ["9","8","7","6","5","4","3","2","1","0"];
        resultScreen = $('.result');
        result = 0;
    }vars();
    
    function createElements(){
        $.each(numbers, function(index, numbers){
            $('.numbers').append('<button class="'+numbers+'">'+numbers+'</button>');
        });
    } createElements();
    
    
    function styles(){
      $('.numbers button:last').css({'width':'64%'});
    }styles();
    
    function actions(){
        
        $('.numbers').append('<button class="resultado">=</button>')
        $.each(numbers, function(index, numbers){
            $('.'+ numbers).on('click', function(){
                
                numberSelect = $(this).text();
                numberSelect += numberSelect;
                resultScreen.text(numberSelect++);
                
            })
        });
    }actions();
    
    
})