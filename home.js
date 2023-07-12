
let slides = document.getElementsByClassName("mySlides")
let slideIndex = 0;

let im = document.getElementsByClassName("img")
var s = 1;
function displayLogout(){
  if (localStorage.getItem('logout') == null) {
    localStorage.setItem('logout', 'false');
  }
  if(JSON.parse(localStorage.getItem('logout'))===true){
document.getElementById('logout').style.display='block';
document.getElementById('signup').style.display='none';
  }else{
    console.log(JSON.parse(localStorage.getItem('logout')));
    document.getElementById('logout').style.display='none';
    document.getElementById('signup').style.display='block';
  }
  

}

function logout(){
  localStorage.setItem('logout', 'false');
  localStorage.setItem('admin',JSON.stringify(false));
  document.getElementById('movie-btn').style.display='none';
}



function rate(){
document.getElementById(".star-widget").style.display = "none";
document.getElementById("post").style.display = "block";
document.querySelector(".edit").onclick=()=>{
  document.getElementById(".star-widget").style.display = "block";
  document.getElementById("post").style.display = "none";
}
}
plusSlides(0)
function plusSlides(x) {

  for (let i = 3; i < im.length; i++) {
    im[i].style.display = "none";

  }
  if (x === 1) {
    var temp;
    temp = im[im.length - 1];
    temp.src = im[im.length - 1].src;
    temp.alt = im[im.length - 1].alt;
    for (var i = im.length - 1; i > 0; i--) {
      im[i] = im[i - 1];
      im[i].src = im[i - 1].src;
      im[i].alt = im[i - 1].alt;
    }

    im[0] = temp;
    im[0].src = temp.src;
    im[0].alt = temp.alt;

  } else if (x === -1) {
    var temp;
    temp = im[0]
    temp.src = im[0].src
    temp.alt = im[0].alt
    for (var i = 0; i < im.length - 1; i++) {
      im[i] = im[i + 1];
      im[i].src = im[i + 1].src;
      im[i].alt = im[i + 1].alt;
    }
    im[im.length - 1] = temp;
    im[im.length - 1].src = temp.src;
    im[im.length - 1].alt = temp.alt;
  }


}
function display(id) {

document.getElementById("film").src=document.getElementById(id).alt;

}