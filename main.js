var colors = generateColors(6);



var picked = pickColor();
var squares = document.querySelectorAll('.square');
var color_disp = document.getElementById('rgbv');
var msg_disp = document.getElementById('message');

color_disp.textContent = picked;

for(var i =0 ;i<squares.length;i++){
  
    squares[i].style.backgroundColor = colors[i]
   
    squares[i].addEventListener("click",function(){
        var clicked_color = this.style.backgroundColor;
        if(clicked_color === picked){
            // to change all the colors
            for(var j=0;j<squares.length;j++){
                squares[j].style.backgroundColor = picked;
            }
            msg_disp.textContent = "Correct!";
        }
        else{
            this.style.backgroundColor = "#232323";
            msg_disp.textContent = "Try Again";
        }
        
    });

}


function pickColor(){
   var pick_id = Math.floor(Math.random()*colors.length);
    return colors[pick_id]; 
}

function generateColors(num){

    var colors_list = []

    for(var i=0; i<num;i++){
        colors_list.push(randomColor());
        console.log(colors_list[i]);
    }

    return colors_list;

}

function randomColor(){

    var red = Math.floor(Math.random()*255+1);
    var blue = Math.floor(Math.random()*255+1);
    var green = Math.floor(Math.random()*255+1);

    return "rgb("+red+", "+green+", "+blue+")";
}