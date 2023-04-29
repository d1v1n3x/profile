function keisan() {
  var a, b, d;
  a = document.getElementById("shincho").value;
  b = document.getElementById("taijuu").value;
  c = b / ((a / 100) * (a / 100));

  if (c >= 25) {
    document.getElementById("kuuran").textContent = "Overweight";
  } else if (c < 25 && c >= 18) {
    document.getElementById("kuuran").textContent = "Healthy";
  } else {
    document.getElementById("kuuran").textContent = "Underweight";
  }
}

function mw_calc() {
  b_min = document.getElementById("b_min").value;
  b_sec = document.getElementById("b_sec").value; 
  b_w1 = document.getElementById("b_w1").value; 
  b_w2 = document.getElementById("b_w2").value; 

  if (b_min == "") {
    isec1 = Number(b_sec);
  } else {
    isec1 = Number(b_min) * 60 + Number(b_sec);
  }

  w1 = Number(b_w1);
  w2 = Number(b_w2);


  ws = w1 * isec1;

  
  isec2 = ws / w2;
  document.getElementById("result").innerHTML =
    "<b>result：" +
    Math.floor(isec2) +
    "second (" +
    Math.floor(isec2 / 60) +
    "minute" +
    Math.floor(isec2 % 60) +
    "second)</b>";
}
