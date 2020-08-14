jQuery("document").ready(function () {
        jQuery("button").on('click', function(){
            var width, lenght, height, weight;
            
            width = jQuery('.width-input').val();
            lenght = jQuery('.lenght-input').val();
            height = jQuery('.height-input').val();
            weight = jQuery('.weight-input').val();
            
            lenght = parseFloat(lenght);
            height = parseFloat(height);
            
            if ((lenght <= 7) && (height <= 2.9) && (width <= 2) && (weight <= 3.5)){
                alert('Congratilations, your car is great for SuperFerries');
            }else{
                alert("I'm sorry, but your car bad fot SuperFerries");
            }
        })
    jQuery(".search").on('click', function(){
            alert("Sorry, but now our website can't search information for you:(");
        })
    
})