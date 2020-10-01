var ammount = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var repeatButtom = document.querySelector("#repeat");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

setupModeButtons();
repeatButtom.addEventListener("click", function(){
	reset();
})
setupSquares();
reset();

}

function setupSquares()
{
	for(var i = 0; i < squares.length; i++)
 {
 	//add click listeners to squares
 	squares[i].addEventListener("click", function(){
 		//grab color of clicked square
 		var squareColor = this.style.backgroundColor;
 		//compare color to pickedcolor
 		console.log(squareColor, "---", pickedColor);
 		if(squareColor === pickedColor)
 		{
 			messageDisplay.textContent = "Correct!";
 			repeatButtom.textContent = "Play again?";
 			changeColors(squareColor);
 			h1.style.backgroundColor = squareColor;

 		}else{
 			this.style.backgroundColor = "#232323";
 			messageDisplay.textContent = "Try Again";
 		}
 	});
 }
}

function setupModeButtons()
{
		for(var i = 0; i < modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy")
		{
			ammount = 3;
		}else{
			ammount = 6;
		}
		reset();
	});
}
}

function reset(){
	//reset colors
	colors = generateColorArray(ammount);
	//pick a new color
	pickedColor = pickColor();
	//cahnge color display to match new
	colorDisplay.textContent = pickedColor;
	repeatButtom.textContent = "New Color"
	messageDisplay.textContent = "";
	//change color of squares
	 for(var i = 0; i < squares.length; i++)
 	{
 	//add initial colors to squares
 	if(colors[i])
 	{
 		squares[i].style.display = "block";
 		squares[i].style.backgroundColor = colors[i];
 	}else{
 		squares[i].style.display = "none";
 	}
 	}
 	h1.style.backgroundColor = "steelblue";
}



 function changeColors(color)
 {
 	//loop throught colors and change color to given one
 	for (var i = 0; i < colors.length; i++)
 	{
 		squares[i].style.backgroundColor = color;
 	}
 }

 function pickColor()
 {
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
  }

  function generateColorArray(num)
  {
  	//make an array of n len
  	arr = new Array(num)
  	//assign a random color to each position
  	for(var i = 0; i < num; i++)
  	{
  		arr[i] = generateColor();
  	}

  	return arr;
  }

  function generateColor(){
  	var r = Math.floor(Math.random()*256);
  	var g = Math.floor(Math.random()*256);
  	var b = Math.floor(Math.random()*256);
  	var s = "rgb("+ r + ", " + g + ", "+ b + ")";
  	return s;
  }