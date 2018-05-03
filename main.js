var num_of_squares = 6;
var colors = generateColors(num_of_squares);
var picked = pickColor();
var squares = document.querySelectorAll('.square');
var color_disp = document.getElementById('rgbv');
var msg_disp = document.getElementById('message');
var reset_btn = document.getElementById('reset');
var header = document.getElementById("headme");
var easy_btn = document.getElementById("Easy");
var hard_btn = document.getElementById("Hard");

easy_btn.addEventListener("click",function(){
    hard_btn.classList.remove("selected");

    easy_btn.classList.add("selected");
    num_of_squares = 3;
    colors  = generateColors(num_of_squares);
    picked = pickColor();
    color_disp.textContent = picked;
    console.log(colors);
    for (var i= 0 ;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = 'none';
        }
        }

});

hard_btn.addEventListener("click",function(){
    hard_btn.classList.add("selected");

    easy_btn.classList.remove("selected");
    num_of_squares = 6;
    colors  = generateColors(num_of_squares);
    picked = pickColor();
    color_disp.textContent = picked;
    console.log(colors);
    for (var i= 0 ;i<squares.length;i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';

        }
});


reset_btn.addEventListener("click",function(){
     colors = generateColors(num_of_squares);
     picked = pickColor();
    color_disp.textContent = picked;
    
    for(var i =0 ;i<squares.length;i++){
  
        squares[i].style.backgroundColor = colors[i]
    }
});
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
            reset_btn.textContent = "Play Again?";
            header.style.backgroundColor = picked;

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