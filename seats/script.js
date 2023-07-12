//guz2 sarah 
// let movies=[];
// let c=0;
function transfere() {
  console.log(JSON.parse(localStorage.getItem('logout')));
  if (JSON.parse(localStorage.getItem('logout')) == false ) {

    window.location.replace("../forms/login.html");
  } else {
    window.location.replace("message.html");

  }
}
function moviebtn(){
  if(JSON.parse(localStorage.getItem('admin')) == true){
    document.getElementById('movie-btn').style.display='block';
  }else{
    document.getElementById('movie-btn').style.display='none';
  }
}

function displayLogout() {

  if (JSON.parse(localStorage.getItem('logout')) == true) {
    document.getElementById('logout').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
  } else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
  }
  console.log(localStorage.getItem('logout'));
}
function logout() {
  localStorage.setItem('logout', 'false');
  localStorage.setItem('admin',JSON.stringify(false));
}
function itle() {
  const title = document.getElementById("movietitle").value;
  console.log(title);
  document.getElementById("titlespan").innerHTML = title
}
// //3shan azher el sura
let upload = document.getElementById("mov");
let file;

function setimg() {

  let fil = new FileReader();
  fil.readAsDataURL(upload.files[0]);
  fil.onload = function () {
    document.getElementById("imag1").src = fil.result;
    file = document.getElementById("imag1").src;
  }
}

// // 3shan a save info el film


function transMovieInfo() {

  const title = document.getElementById("movietitle").value;
  const source = document.getElementById("mov").src;
  localStorage.setItem("title", title);
  localStorage.setItem("source", file);
  let movie = {
    'title': localStorage.getItem("title"),
    'source': localStorage.getItem("source")
  };
  if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
  }
  var old_data = JSON.parse(localStorage.getItem('data'));
  old_data.push(movie);
  localStorage.setItem('data', JSON.stringify(old_data));
}
function clrdata() {
  localStorage.setItem('data', '[]')
  localStorage.setItem('users', '[]')

}
// // a3ml div a7ut feh el info
function createMovie() {
  var data = JSON.parse(localStorage.getItem('data'))

  for (var i = 0; i < data.length; i++) {
    var a = document.createElement('a');
    a.className = "movie-link";
    a.href = "seats.html";
    var new_div = document.createElement('div');
    new_div.className = "movie-div";
    var new_img = document.createElement('img');
    new_img.className = "movie-img";
    var source = JSON.parse(localStorage.getItem('data'))[i].source;
    new_img.src = source
    var new_span = document.createElement('span');
    new_span.className = "movie-title";
    var text = JSON.parse(localStorage.getItem('data'))[i].title;
    const node = document.createTextNode(text);
    new_span.appendChild(node);
    new_div.appendChild(new_img);
    new_div.appendChild(new_span);
    a.appendChild(new_div);
    if (new_img.src != "" && node != "") {
      document.getElementById("body").appendChild(a);
    }
  }
}


function test() {
  document.getElementById('movie-name').innerHTML = localStorage.getItem("movie");
}
function addname(x) {
  const name = x;
  localStorage.setItem("movie", name);
}

//functions bta3t ta2keed el se3r
function pay() {
  const LE = document.getElementById("total").innerHTML;
  localStorage.setItem("pay", LE);

}
function getLE() {
  document.getElementById('money').innerHTML = localStorage.getItem("pay");
  let ss = document.getElementById('money').innerHTML;
}

// -----------------------------------------------------------------------------------------------------------------//

//guz2 3abdlah
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


populateUI();


let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});


// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
