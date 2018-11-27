
var digit = "";
var accumulate = 0;
var addition = false; 
var subtract = false;

function display_numbers(n){
  document.getElementById("display").value=digit+n;

  digit = document.getElementById("display").value;
}

function equals(){
  
  accumulate = accumulate + parseInt(digit);
  document.getElementById("display").value=accumulate;

  digit="";

  addition = true;
  subtract = false;
  
}

function substraction(){

  if(addition){
    accumulate = accumulate + parseInt(digit);
    document.getElementById("display").value=accumulate;
  }else{
    accumulate = accumulate - parseInt(digit);
    document.getElementById("display").value=accumulate;
  }
  digit="";
  addition=false;
  subtract=true; 
}

function result(){

  if(addition){
    document.getElementById("display").value=accumulate+parseInt(digit);
  }else if(subtract){
    document.getElementById("display").value=accumulate+parseInt(digit);
  }

  accumulate=parseInt(document.getElementById("display").value);
  digit=0;
}