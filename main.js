var topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
