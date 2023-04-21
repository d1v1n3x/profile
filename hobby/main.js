const myImage = document.querySelector('#myImage');
var topBtn = document.getElementById("topBtn");


myImage.addEventListener('click', function() {
  if (myImage.getAttribute('src') === 'image1.png') {
    myImage.setAttribute('src', 'image2.png');
    myImage.setAttribute('alt', '画像2');
  } else {
    myImage.setAttribute('src', 'image1.png');
    myImage.setAttribute('alt', '画像1');
  }
});

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
