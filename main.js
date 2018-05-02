alert("conned");
var colors = [
    "rgb(255, 0, 0)",

    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 150, 0)",
    "rgb(255, 0, 210)",
    "rgb(255, 0, 30)"
]

var squares = document.querySelectorAll('.square');
console.log(squares);
for(var i =0 ;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
}