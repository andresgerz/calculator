
let digit = 0;
let accumulate = 0;
let adding = false; 
let subtracting = false;
let multiplying = false;
let p_operation = true;

function display_numbers(n) {
  document.getElementById("display").value = digit + n;

  digit = document.getElementById("display").value;
  console.log(digit);
};

function equals() {
  
  accumulate = accumulate + parseFloat(digit);
  document.getElementById("display").value = accumulate;
  console.log(accumulate);
  digit = 0;

  adding = true;
  subtracting = false;
  multiplying = false;
};

function subtraction() {

  if(p_operation == false) {

    if(adding) {
      accumulate = accumulate + parseFloat(digit);
      console.log(accumulate);
      document.getElementById("display").value = accumulate;

    } else {
      accumulate = accumulate - parseFloat(digit);
      console.log(accumulate);
      document.getElementById("display").value = accumulate;
    };
  } else {
    accumulate = parseFloat(digit);
    console.log(accumulate);
    p_operation = false;
  };

  digit = 0;
  adding = false;
  subtracting = true; 
  multiplying = false;
};

function addition() {

  if(subtract) {
    accumulate = accumulate - parseFloat(digit);
    console.log(accumulate);
    document.getElementById("display").value = accumulate;

  } else {
    accumulate = accumulate + parseFloat(digit);
    console.log(accumulate);
    document.getElementById("display").value = accumulate;
  };

  digit = 0;
  
  adding= true;

  subtracting = false;
  multiplying = false;
  p_operation = false;
};

function ac() {
  digit = 0;
  accumulate = 0;
  console.log(accumulate + " -- " + digit);
  document.getElementById("display").value = digit;
}; 


function multiply() {
  accumulate = accumulate + (1 * parseFloat(digit));
  document.getElementById("display").value = accumulate;
  console.log(accumulate);
  digit = 0;
  multiplying = true;
  adding = false;
  subtracting = false;
};


function result() {
console.log(multiply);
  if (adding) {
    document.getElementById("display").value = accumulate + parseFloat(digit);

  } else if (subtracting) {
    document.getElementById("display").value = accumulate - parseFloat(digit);

  } else if (multiplying) {
    document.getElementById("display").value = accumulate * parseFloat(digit);
  };

  accumulate = parseFloat(document.getElementById("display").value);
  digit = 0;
  console.log(accumulate + " -- " + digit);
  
}