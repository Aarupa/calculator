function addDigit(val)
{
    document.getElementById("result").value+=val; //its for display value in input as like.
}

function equal()
{
    let x =document.getElementById("result").value;
    let y = eval(x);  //eval is a built-in JavaScript function that evaluates a string and returns the result of the evaluation.
    document.getElementById("result").value=y;// eval is a built-in JavaScript function that evaluates a string and returns the result of that evaluation
}

function clr()
{
    document.getElementById("result").value = " ";
}